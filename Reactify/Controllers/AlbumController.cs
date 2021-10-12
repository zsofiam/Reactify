using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Reactify.Models;

namespace Reactify.Controllers
{
    [ApiController]
    [Route("player")]
    public class AlbumController : ControllerBase
    {
        [HttpGet]
        public async Task<List<Track>> GetResultTracks([FromQuery] string albumId)
        {
            if (albumId == "" || albumId is null) albumId = GetAlbumIdByDate().ToString();
            var url = "https://api.deezer.com/album/" + albumId.Trim().Replace(" ", "_");

            var tracks = new List<Track>();

            return await GetTracks(url, tracks);
        }


        private async Task<List<Track>> GetTracks(string url, List<Track> tracks)
        {
            using (var httpClient = new HttpClient())
            {
                var albumData = await GetAlbumData(url, httpClient);

                var album = new Album
                {
                    Title = (string) albumData["title"],
                    Cover = (string) albumData["cover_xl"],
                    Artist = (string) albumData["artist"]?["name"]
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
                    Preview = (string) track["preview"],
                    Title = (string) track["title"],
                    Image = (string) albumData["cover_xl"],
                    ArtistName = (string) albumData["artist"]?["name"],
                    Id = (string) track["id"]
                };

                tracks.Add(song);
            }
        }


        private int GetAlbumIdByDate()
        {
            var localDate = DateTime.Now;
            var month = localDate.Month;
            var day = localDate.Day;
            int albumId;


            if (month >= 1 && month < 4)
                albumId = (int) AlbumIds.Valentinesday;
            else if (month >= 4 && month < 9)
                albumId = (int) AlbumIds.Easter;
            else if (month >= 9 && month < 11)
                albumId = (int) AlbumIds.Halloween;
            else
                albumId = (int) AlbumIds.Christmas;
            return albumId;
        }

        internal enum AlbumIds
        {
            Halloween = 257819812,
            Christmas = 7049462,
            Valentinesday = 14663594,
            Easter = 13048098
        }
    }
}