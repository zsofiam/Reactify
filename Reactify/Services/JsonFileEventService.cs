using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text.Json;
using Microsoft.AspNetCore.Hosting;
using Reactify.Models;

namespace Reactify.Services
{
    public class JsonFileEventService
    {
        public JsonFileEventService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string JsonFileName => Path.Combine(WebHostEnvironment.WebRootPath, "data", "events.json");

        public IEnumerable<Event> GetEvents()
        {
            var events = GetEventsFromFile();
            FormatEventDates(events);
            return events;
        }

        private void FormatEventDates(IEnumerable<Event> events)
        {
            events.ToList().ForEach(Event =>
            {
                Event.Date = Convert.ToDateTime(Event.Date).ToString("D", new CultureInfo("en-US"));
            });
        }


        private IEnumerable<Event> GetEventsFromFile()
        {
            using (var jsonFileReader = File.OpenText(JsonFileName))
            {
                return JsonSerializer.Deserialize<List<Event>>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }
    }
}