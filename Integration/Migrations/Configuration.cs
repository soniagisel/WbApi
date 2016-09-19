namespace Integration.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Integration.DAL.Entities;

    internal sealed class Configuration : DbMigrationsConfiguration<Integration.DAL.StudentsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Integration.DAL.StudentsContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Students.AddOrUpdate(
                p => p.StudentName,
                new Student { StudentName="Laura", StudentbatchNo="1", StudentDepartment="3", StudentRollNo="1", StudentYear="1" },
                new Student { StudentName="Mabel", StudentbatchNo="5", StudentDepartment="1", StudentRollNo="2", StudentYear="4" }
            );
        }
    }
}
