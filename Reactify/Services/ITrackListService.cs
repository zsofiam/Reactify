using Reactify.Models;

namespace Reactify.Services
{
    public interface ITrackListService
    {
        Account RetrieveAccountFromDb(int accountId);
        void SaveTrackToTracklist(Account account, Track track);
        void DeleteTrackFromTracklist(Account account, Track track);

        Track CreateTrackFromData(TrackWithUserId trackWithUserId);
    }
}
