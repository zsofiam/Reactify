
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using Reactify.Models;
using System.Text.Json;
using System.Text.Json.Serialization;
using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

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
            using (var jsonFileReader = File.OpenText(JsonFileName))
            {
                Console.WriteLine(Path.Combine(WebHostEnvironment.WebRootPath, "data", "events.json").ToString());
                return JsonSerializer.Deserialize<List<Event>>(jsonFileReader.ReadToEnd(),
                    new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
            }
        }




       
        
    }
}
