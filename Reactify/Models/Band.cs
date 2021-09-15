using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class Band
    {
        public string Name { get; set; }

        public string Image { get; set; }

        public string Genre { get; set; }

        public string Country { get; set; }

        public string Website { get; set; }

        public string Biography { get; set; }

    }
}
