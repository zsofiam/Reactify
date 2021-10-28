using Reactify.Data;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Reactify.Services
{
    public class AccountService : IAccountService
    {
        private ApplicationDbContext _dbContext;

        public AccountService(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public List<Track> GetPlayerList(string userId)
        {
            var account = _dbContext.Accounts.Where(acc => acc.User.Id == Int32.Parse(userId))
                                             .Include("Track").ToList()[0];
            return account.Tracks;
        }
    }
}
