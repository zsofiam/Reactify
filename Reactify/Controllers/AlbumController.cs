using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;
using Reactify.Models;

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
        public async Task<List<Track>> GetResultTracks([FromQuery] string albumId)
        {

            if (albumId == "" || albumId is null) albumId = "302127";

            var url = "https://api.deezer.com/album/" + albumId.Trim().Replace(" ", "_");

            var tracks = new List<Track>();

            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = httpClient.GetAsync(url).Result;

                response.EnsureSuccessStatusCode();
                var apiResponse = await response.Content.ReadAsStringAsync();
                var albumData = JObject.Parse(apiResponse);


                var album = new Album
                {
                    Title = (string)albumData["title"],
                    Cover = (string)albumData["cover_xl"],
                    Artist = (string)albumData["artist"]?["name"]
                };

                foreach (var track in albumData["tracks"]["data"])
                {
                    var song = new Track
                    {
                        Preview = (string)track["preview"],
                        Title = (string)track["title"],
                        Image = (string)albumData["cover_xl"],
                        ArtistName = (string)albumData["artist"]?["name"],
                        Id = (string)track["id"]
                    };

                    tracks.Add(song);
                }

                album.Tracks = tracks;
                return tracks;
            }
        }
    }
}