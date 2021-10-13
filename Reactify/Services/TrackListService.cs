using Reactify.Data;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class TrackListService : ITrackListService
    {
        public ApplicationDbContext _dbContext;

        public TrackListService()
        {
            _dbContext = new ApplicationDbContext();
        }
        public void DeleteTrackFromTracklist(Track track)
        {
            throw new NotImplementedException();
        }

        public Account RetrieveAccountFromDb(int accountId)
        {
            return _dbContext.Accounts.Where(account => account.Id == accountId).FirstOrDefault();
        }

        public void SaveTrackToTracklist(Track track)
        {
            throw new NotImplementedException();
        }
    }
}
