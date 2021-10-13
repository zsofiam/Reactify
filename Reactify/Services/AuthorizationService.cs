using Reactify.Data;
using Reactify.Models;
using System.Collections.Generic;

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
            _dbContext.Add(new Account { User = newUser, Tracks = new List<Track>()});
            _dbContext.SaveChanges();
        }
    }
}
