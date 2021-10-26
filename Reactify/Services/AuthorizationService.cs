using Reactify.Data;
using Reactify.Models;
using System.Collections.Generic;
using System.Linq;

namespace Reactify.Services
{
    public class AuthorizationService : IAuthorizationService
    {
        private ApplicationDbContext _dbContext;

        public AuthorizationService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public int SaveNewUser(User newUser)
        {

            _dbContext.Database.EnsureCreated();
            _dbContext.Add(newUser);
            _dbContext.Add(new Account { User = newUser, Tracks = new List<Track>()});
            _dbContext.SaveChanges();
            return newUser.Id;
        }


        public int Login(User user)
        {
            var loginUser = _dbContext.Users
                .Where(x => x.Email == user.Email && x.Password == user.Password);
            return loginUser.FirstOrDefault().Id;
        }
    }
}
