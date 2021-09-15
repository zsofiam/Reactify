using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reactify.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

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
        public async Task<IEnumerable<Track>> GetResultTracks([FromForm] string track)  // it was type IEnumerable<Track> void or Task type?
        {
            // get all track based on incoming track search
            
            string url = "https://api.deezer.com/search?q=track:" + track.Trim().Replace(" ", "_");
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                string apiResponse = await response.Content.ReadAsStringAsync();
                IEnumerable<Track> details = JObject.Parse(apiResponse) as IEnumerable<Track>;
                return details;
            }
            
        }

        //get specific track
        [HttpGet("{id}")]
        public IEnumerable<Track> GetTrack()
        {
            return Enumerable.Range(1, 5).Select(index => new Track
            {
                Id = "1",
                Duration = "60",
                ReleaseDate = "tegnap",
                Title = "Fake Title",
                Preview = "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
            })
            .ToArray();
        }
    }
}