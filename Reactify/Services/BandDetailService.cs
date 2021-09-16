using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json.Linq;
using Reactify.Models;

namespace Reactify.Services
{
    public class BandDetailService
    {
        public BandDetailService()
        {
            SearchedBand = new Band();
        }

        public Band SearchedBand { get; }

        public async void FetchBandDetails(string searchedName)
        {
            var url = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + searchedName;
            using (var httpClient = new HttpClient())
            {
                httpClient.DefaultRequestHeaders.Add("User-Agent", "Anything");
                httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));


                var response = httpClient.GetAsync(url).Result;
                response.EnsureSuccessStatusCode();
                var apiResponse = await response.Content.ReadAsStringAsync();
                var details = JObject.Parse(apiResponse)["artists"][0];
                SearchedBand.Name = (string) details["strArtist"];
                SearchedBand.Image = (string) details["strArtistBanner"];
                SearchedBand.Genre = (string) details["strGenre"];
                SearchedBand.Country = (string) details["strCountry"];
                SearchedBand.Website = (string) details["strWebsite"];
                SearchedBand.Biography = (string) details["strBiographyEN"];
            }
        }
    }
}