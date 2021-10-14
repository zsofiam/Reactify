using Microsoft.EntityFrameworkCore;
using Reactify.Models;

namespace Reactify.Data
{
    public class ApplicationDbContext : DbContext
    {

        public DbSet<User> Users { get; set; }
        public DbSet<Account> Accounts { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=ReactifyUsers;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}