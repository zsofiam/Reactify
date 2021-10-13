using Microsoft.AspNetCore.Mvc;
using Reactify.Models;
using Reactify.Services;
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
        private IAccountService service;

        public AccountController(IAccountService service)
        {
            this.service = service;
        }

        [HttpPost("playlist")]
        public Task<List<Track>> GetPlayListByUserId(string userId)
        {
            //return service.GetPlayerList(userId);
            throw new NotImplementedException();
        }
    }
}
