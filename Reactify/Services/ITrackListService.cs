using Reactify.Models;

namespace Reactify.Services
{
    public interface ITrackListService
    {
        Account RetrieveAccountFromDb(int accountId);
        void SaveTrackToTracklist(Track track);
        void DeleteTrackFromTracklist(Track track);
    }
}
