using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class Account
    {
        public int Id { get; set; }
        public User User { get; set; }
        public List<Track> Tracks { get; set; }


    }
}
