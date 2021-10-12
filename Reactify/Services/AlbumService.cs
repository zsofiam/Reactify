using Newtonsoft.Json.Linq;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class AlbumService
    {
        public async Task<List<Track>> RetrieveTracksAsync(string albumId)
        {
            if (albumId == "" || albumId is null)
            {
                albumId = GetAlbumIdByDate().ToString();
            }
            string url = "https://api.deezer.com/album/" + albumId.Trim().Replace(" ", "_");

            List<Track> tracks = new List<Track>();

            return await GetTracks(url, tracks);
        }
        private async Task<List<Track>> GetTracks(string url, List<Track> tracks)
        {
            using (var httpClient = new HttpClient())
            {
                JObject albumData = await GetAlbumData(url, httpClient);

                var album = new Album
                {
                    Title = (string)albumData["title"],
                    Cover = (string)albumData["cover_xl"],
                    Artist = (string)albumData["artist"]?["name"]
                };

                GetSong(tracks, albumData);

                album.Tracks = tracks;
                return tracks;
            }
        }

        private async Task<JObject> GetAlbumData(string url, HttpClient httpClient)
        {
            httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

            var response = httpClient.GetAsync(url).Result;

            response.EnsureSuccessStatusCode();
            var apiResponse = await response.Content.ReadAsStringAsync();
            var albumData = JObject.Parse(apiResponse);
            return albumData;
        }

        private void GetSong(List<Track> tracks, JObject albumData)
        {
            foreach (var track in albumData["tracks"]["data"])
            {
                var song = new Track
                {
                    Preview = (string)track["preview"],
                    Title = (string)track["title"],
                    Image = (string)albumData["cover_xl"],
                    ArtistName = (string)albumData["artist"]?["name"],
                    Id = (string)track["id"]
                };

                tracks.Add(song);
            }
        }

        private int GetAlbumIdByDate()
        {
            DateTime localDate = DateTime.Now;
            int month = localDate.Month;
            int day = localDate.Day;
            int albumId;


            if (month >= 1 && month < 4)
            {
                albumId = (int)AlbumIds.Valentinesday;
            }
            else if (month >= 4 && month < 9)
            {
                albumId = (int)AlbumIds.Easter;
            }
            else if (month >= 9 && month < 11)
            {
                albumId = (int)AlbumIds.Halloween;
            }
            else
            {
                albumId = (int)AlbumIds.Christmas;
            }
            return albumId;
        }

        private enum AlbumIds : int
        {
            Halloween = 257819812,
            Christmas = 7049462,
            Valentinesday = 14663594,
            Easter = 13048098
        }
    }
}
