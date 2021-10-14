using Reactify.Data;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Reactify.Services
{
    public class AccountService : IAccountService
    {
        private ApplicationDbContext _dbContext;

        public AccountService()
        {
            _dbContext = new ApplicationDbContext();
        }

        public List<Track> GetPlayerList(string userId)
        {
            var user = _dbContext.Accounts.First(acc => acc.Id == Int32.Parse(userId));
            var trackZ = user.Tracks;
            Console.WriteLine("Bob?");
            return trackZ;
        }
    }
}
