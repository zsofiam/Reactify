using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class Event
    {
        [JsonPropertyName("Id")]
        public string Id { get; set; }
        public string Band { get; set; }
        public string[] Genre { get; set; }

        public DateTime Date { get; set; }
        public string Location { get; set; }
        public string Venue { get; set; }

          [JsonPropertyName("img")]
        public string Img { get; set; }
        public string Url { get; set; }
        //public override string ToString() => JsonSerializer.Serialize <Event> (this);
    }
}
