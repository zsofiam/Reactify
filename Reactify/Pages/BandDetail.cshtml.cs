using Microsoft.AspNetCore.Mvc.RazorPages;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Pages
{
    public class BandListModel : PageModel
    {
        public BandListModel(BandDetailService bandDetailService)
        {
            BandDetailService = bandDetailService;
        }

        public Band SearchedBand { get; set; }
        public BandDetailService BandDetailService { get; set; }

        public void OnGet()
        {
            SearchedBand = BandDetailService.SearchedBand;
        }
    }
}