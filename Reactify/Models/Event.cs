using System.Text.Json.Serialization;

namespace Reactify.Models
{
    public class Event
    {
        [JsonPropertyName("Id")] public string Id { get; set; }

        public string Band { get; set; }
        public string[] Genre { get; set; }

        public string Date { get; set; }
        public string Location { get; set; }
        public string Venue { get; set; }

        [JsonPropertyName("img")] public string Img { get; set; }

        public string Url { get; set; }
    }
}