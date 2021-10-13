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
            //_dbContext.SaveChanges();
            _dbContext.Add(new Account { User = newUser, Tracks = new List<Track>()});
            _dbContext.SaveChanges();
        }
    }
}
