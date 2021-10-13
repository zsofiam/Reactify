using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Reactify.Models;

namespace Reactify.Data
{
    public class ApplicationDbContext : DbContext // this was ApiAuthorizationDbContext
    {

        public DbSet<User> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=ReactifyUsers;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}