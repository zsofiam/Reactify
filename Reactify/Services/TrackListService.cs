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
        public Account RetrieveAccountFromDb(int userId)
        {
            return _dbContext.Accounts.Where(account => account.User.Id == userId).FirstOrDefault();
        }
        public void SaveTrackToTracklist(Account account, Track track)
        {
            account.Tracks.Add(track);
            _dbContext.SaveChanges();
        }
        public void DeleteTrackFromTracklist(Account account, Track track)
        {
            throw new NotImplementedException();
        }
    }
}
