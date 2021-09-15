using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reactify.Models;
using System.Collections.Generic;
using System.Linq;

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
        [HttpPost]
        public IEnumerable<Track> GetResultTracks([FromForm] string track)
        {
            return Enumerable.Range(1, 5).Select(index => new Track
            {
                Id = "1",
                Duration = "60",
                ReleaseDate = track,
                Title = "Fake Title",
                Preview = "https://cdns-preview-d.dzcdn.net/stream/c-deda7fa9316d9e9e880d2c6207e92260-8.mp3"
            })
            .ToArray();
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