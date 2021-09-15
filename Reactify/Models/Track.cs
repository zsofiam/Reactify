namespace Reactify.Models
{
    public class Track
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Duration { get; set; }
        public string ReleaseDate { get; set; }
        public string Preview { get; set; }
        public Artist Artist { get; set; }
        public Album Album { get; set; }
    }
}
