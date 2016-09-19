using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Integration.DAL.Entities;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions; 

namespace Integration.DAL
{
    public class StudentsContext : DbContext
    {
        public StudentsContext() : base("StudentsContext")
        { }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}