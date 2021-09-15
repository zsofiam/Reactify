using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Reactify.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("player")]

    public class AlbumController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public AlbumController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<List<Album>> GetResultTracks([FromQuery] string albumId)  // it was type IEnumerable<Track> void or Task type?
        {


            string url = "https://api.deezer.com/album/" + albumId.Trim().Replace(" ", "_");
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                string apiResponse = await response.Content.ReadAsStringAsync();
                var albumData = JObject.Parse(apiResponse);
                var result = new List<Album>();


                Album album = new Album();
                album.Title = (string)albumData["title"];
                album.Cover = (string)albumData["cover_xl"];
                album.Artist = (string)albumData["artist"]["name"];
                List<Track> tracks = new List<Track>();

                foreach (var track in albumData["tracks"]["data"])
                {
                    Track song = new Track();
                    song.Preview = (string)track["preview"];
                    song.Title = (string)track["title"];
                    tracks.Add(song);
                }
                album.Tracks = tracks;
                result.Add(album);
                return result;

            }

        }
    }
}