using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Controllers
{

    [ApiController]
    [Route("authorization")]
    public class AuthorizationController : ControllerBase
    {
        private IAuthorizationService service;

        public AuthorizationController(IAuthorizationService service)
        {
            this.service = service;
        }

        [HttpPost("register")]
        public async Task<int> RegisterAccount([FromHeader] UserModell newUser)
        {

            User user = new User { Email = newUser.Email, Password = newUser.Password };

            return service.SaveNewUser(user); ;
        }

        [HttpPost("login")]
        public async Task<int> Login([FromHeader] User user)
        {
            return service.Login(user);
        }

    }
}