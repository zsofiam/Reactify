using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
        private readonly JsonFileEventService _eventService;

        public EventController(JsonFileEventService eventService)
        {
            _eventService = eventService;
        }

        [HttpGet]
        public IEnumerable<Event> Get()
        {
            return _eventService.GetEvents();
        }
    }
}