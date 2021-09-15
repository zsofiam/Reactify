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
    [Route("track")]

    public class MusicPlayerController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        public MusicPlayerController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }


        // get search result tracks
        [HttpGet]
        public async Task<List<Track>> GetResultTracks([FromQuery] string track)  // it was type IEnumerable<Track> void or Task type?
        {
            // get all track based on incoming track search

            if (track is null || track == "") track = "christmas";

            string url = "https://api.deezer.com/search?q=track:" + track.Trim().Replace(" ", "_");
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                string apiResponse = await response.Content.ReadAsStringAsync();
                var x = JObject.Parse(apiResponse)["data"];
                var result = new List<Track>();

                foreach (var item in x)
                {
                    Track _track = new Track();
                    Artist artist = new Artist();
                    Album album = new Album();

                    _track.Id = (string)item["id"];
                    _track.Preview = (string)item["preview"];
                    _track.Title = (string)item["title"];
                    _track.Duration = (string)item["duration"];

                    artist.Name = (string)item["artist"]["name"];
                    artist.Id = (string)item["artist"]["id"];
                    artist.Picture = (string)item["artist"]["picture"];

                    _track.Artist = artist;

                    album.Id = (string)item["album"]["id"];
                    album.Title = (string)item["album"]["title"];
                    album.Cover = (string)item["album"]["cover"];

                    _track.Album = album;

                    result.Add(_track);
                }
                return result;

            }

        }

        //get specific track
        //[HttpGet]
        //public IEnumerable<Track> GetTrack()
        //{
        //    return Enumerable.Range(1, 5).Select(index => new Track
        //    {
        //        Id = "1",
        //        Duration = "60",
        //        ReleaseDate = "tegnap",
        //        Title = "Fake Title",
        //        Preview = "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
        //    })
        //    .ToArray();
        //}
    }
}