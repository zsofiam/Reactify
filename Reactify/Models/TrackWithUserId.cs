using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Models
{
    public class TrackWithUserId
    {
        public string UserId { get; set; }
        public string Id { get; set; }
        public string Title { get; set; }
        public string Duration { get; set; }
        public string ReleaseDate { get; set; }
        public string Preview { get; set; }
        public string Image { get; set; }
        public Artist Artist { get; set; }
        public string ArtistName { get; set; }
        public Album Album { get; set; }
    }
}
