using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly JsonFileEventService _eventService;

        private readonly ILogger<EventController> _logger;

        public EventController(ILogger<EventController> logger, JsonFileEventService eventService)
        {
            _logger = logger;
            _eventService = eventService;
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return _eventService.GetEvents();
        }
    }
}