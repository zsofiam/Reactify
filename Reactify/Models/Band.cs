using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class Band
    {
        [JsonPropertyName("strArtist")]
        public string Name { get; set; }

        [JsonPropertyName("strArtistLogo")]
        public string Image { get; set; }

        [JsonPropertyName("strGenre")]
        public string Genre { get; set; }

        [JsonPropertyName("strCountry")]
        public string Country { get; set; }

        [JsonPropertyName("strWebsite")]
        public string Website { get; set; }

        [JsonPropertyName("strBiographyEN")]
        public string Biography { get; set; }

    }
}
