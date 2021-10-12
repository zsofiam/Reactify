using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Reactify.Controllers
{
    
    [ApiController]
    [Route("authorization")]
    public class AuthorizationController : ControllerBase
    {
        [HttpPost("register")]
        public async Task<OkResult> RegisterAccount()
        {
            
            return Ok();
        }

        [HttpPost("login")]
        public async Task<OkResult> Login()
        {
            
            return Ok();
        }

    }
}