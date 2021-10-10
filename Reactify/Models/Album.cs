using System.Collections.Generic;

namespace Reactify.Models
{
    public class Album
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public string Cover { get; set; }
        public string ReleaseDate { get; set; }
        public List<Track> Tracks { get; set; }
    }
}