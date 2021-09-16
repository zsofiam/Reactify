
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using Reactify.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using System.Linq;
using System.Globalization;

namespace Reactify.Services
{
    public class JsonFileEventService
    {
     

        public JsonFileEventService(IWebHostEnvironment webHostEnvironment)
        {
            WebHostEnvironment = webHostEnvironment;
        }

        public IWebHostEnvironment WebHostEnvironment { get; }

        private string JsonFileName
        {
            get { return Path.Combine(WebHostEnvironment.WebRootPath, "data", "events.json"); }
        }

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
