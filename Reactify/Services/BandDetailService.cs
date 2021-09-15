using Newtonsoft.Json.Linq;
using Reactify.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Threading.Tasks;

namespace Reactify.Services
{
    public class BandDetailService
    {
        public Band SearchedBand { get; private set; }

        public BandDetailService()
        {
            SearchedBand = new Band();
        }

        public async void FetchBandDetails(string searchedName)
        {
            string url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + searchedName;
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                
                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                string apiResponse = await response.Content.ReadAsStringAsync();
                var details = JObject.Parse(apiResponse)["artists"][0];
                SearchedBand.Name = (string)details["strArtist"];
                SearchedBand.Image = (string)details["strArtistBanner"];
                SearchedBand.Genre = (string)details["strGenre"];
                SearchedBand.Country = (string)details["strCountry"];
                SearchedBand.Website = (string)details["strWebsite"];
                SearchedBand.Biography = (string)details["strBiographyEN"];
            }
        }
    }
}
