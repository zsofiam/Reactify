using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Reactify.Models;
using Reactify.Services;
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

        private readonly ILogger<EventController> _logger;
        private readonly JsonFileEventService _eventService;

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

