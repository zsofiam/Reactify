using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public interface IAuthorizationService
    {
        void SaveNewUser(User newUser);
        void Login(User user);
    }
}
