using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Integration.DAL.Entities
{
    public class Student
    {
        public int ID { get; set; }
        public string StudentName { get; set; }
        public string StudentRollNo { get; set; }
        public string StudentDepartment { get; set; }
        public string StudentbatchNo { get; set; }
        public string StudentYear { get; set; }
    }
}