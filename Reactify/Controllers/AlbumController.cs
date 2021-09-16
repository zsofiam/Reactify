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
        public async Task<List<Track>> GetResultTracks([FromQuery] string albumId)
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
                


                var album = new Album
                {
                    Title = (string) albumData["title"],
                    Cover = (string) albumData["cover_xl"],
                    Artist = (string) albumData["artist"]?["name"]
                };
                var tracks = new List<Track>();

                foreach (var track in albumData["tracks"]["data"])
                {
                    
                    Track song = new Track
                    {
                        Preview = (string) track["preview"],
                        Title = (string) track["title"],
                        Image = (string) albumData["cover_xl"],
                        ArtistName = (string) albumData["artist"]?["name"],
                        Id = (string) track["id"],
                    };
                    
                    tracks.Add(song);
                }

                album.Tracks = tracks;
                return tracks;
            }
        }
    }
}
//
// title: "Test title",
// artist: "Test artist",
// img: "./images/dubstep.jpg",
// src: "./music/bensound-dubstep.mp3"