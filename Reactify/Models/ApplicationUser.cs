using Microsoft.AspNetCore.Identity;

namespace CheckLogin.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Playlist { get; set; }
    }
}
