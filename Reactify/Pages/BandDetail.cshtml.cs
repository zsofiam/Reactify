using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Reactify.Models;
using Reactify.Services;

namespace Reactify.Pages
{
    public class BandListModel : PageModel
    {
        public Band SearchedBand { get; set; }
        public BandDetailService BandDetailService { get; set; }

        public BandListModel(BandDetailService bandDetailService)
        {
            BandDetailService = bandDetailService;
        }
        public void OnGet()
        {
            SearchedBand = BandDetailService.GetBandDetails();
        }
    }
}
