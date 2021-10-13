using Reactify.Data;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class AuthorizationService : IAuthorizationService
    {
        private ApplicationDbContext _dbContext;

        public AuthorizationService()
        {
            _dbContext = new ApplicationDbContext();
        }

        public void SaveNewUser(User newUser)
        {

            _dbContext.Database.EnsureCreated();
            _dbContext.Add(newUser);
            _dbContext.SaveChanges();
        }


        public bool Login(User user)
        {
            var loginUser = _dbContext.Users
                .Where(x => string.Equals(x.Email, user.Email) && string.Equals(x.Password, user.Password));

            return loginUser != null;

        }
    }
}
