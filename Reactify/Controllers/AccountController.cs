using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("account")]

    public class AccountController
    {

        [HttpPost("playlist")]
        public void GetPlayListByUserId(String userId)
        { }
    }
}
