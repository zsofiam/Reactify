using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public interface IAccountService
    {
        List<Track> GetPlayerList(string userId);
    }
}
