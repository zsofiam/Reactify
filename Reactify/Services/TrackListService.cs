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

        public Track CreateTrackFromData(TrackWithUserId trackWithUserId)
        {
            return new Track
            {
                Id = trackWithUserId.Id,
                Title = trackWithUserId.Title,
                Duration = trackWithUserId.Duration,
                ReleaseDate = trackWithUserId.ReleaseDate,
                Preview = trackWithUserId.Preview,
                Image = trackWithUserId.Image,
                Artist = trackWithUserId.Artist,
                ArtistName = trackWithUserId.ArtistName,
                Album = trackWithUserId.Album
            };
        }
    }
}
