using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class Event
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Band { get; set; }
        public String Date { get; set; }
        public string Venue { get; set; }
    }
}
