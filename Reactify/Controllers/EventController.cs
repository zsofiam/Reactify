using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private static readonly string[] Titles = new[]
        {
            "Title1", "Title2", "Title3", "Title4", "Title5", "Title6", "Title7", "Title8", "Title9", "Title10"
        };
        private static readonly string[] Venues = new[]
        {
            "Venue1", "Venue2", "Venue3", "Venue4", "Venue5", "Venue6", "Venue7", "Venue8", "Venue9", "Venue10"
        };
        private static readonly string[] Bands = new[]
        {
            "Band1", "Band2", "Band3", "Band4", "Band5", "Band6", "Band7", "Band8", "Band9", "Band10"
        };

        private readonly ILogger<EventController> _logger;

        public EventController(ILogger<EventController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new Event
            {
                Id = index,
                Title = Titles[rng.Next(Titles.Length)],
                Band = Bands[rng.Next(Bands.Length)],
                Date = DateTime.Now.AddDays(index).ToString("dddd, dd MMMM yyyy"),
                Venue = Venues[rng.Next(Venues.Length)]
            })
            .ToArray();
        }
    }
}

