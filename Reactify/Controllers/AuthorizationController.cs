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
        private AuthorizationService service = new AuthorizationService(); // clean megoldást keresni 


        [HttpPost("register")]
        public async Task<OkResult> RegisterAccount([FromBody] ApplicationUser newUser)
        {

            service.SaveNewUser(newUser);
            return Ok();
        }

        [HttpPost("login")]
        public async Task<OkResult> Login()
        {

            return Ok();
        }

    }
}