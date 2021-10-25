namespace Reactify.Models
{
    public class Track
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Duration { get; set; }
        public string ReleaseDate { get; set; }
        public string Preview { get; set; }
        public string Image { get; set; }
        public Artist Artist { get; set; }
        public string ArtistName { get; set; }
        public Album Album { get; set; }
        //public Account Account { get; set; }

    }
}