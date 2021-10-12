using Microsoft.AspNetCore.Identity;

namespace Reactify.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Placeholder { get; set; }
    }
}