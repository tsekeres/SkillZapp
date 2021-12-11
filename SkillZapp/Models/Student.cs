using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class Student
    {
        public Guid Id { get; set; }
        public Guid GradeLevelId { get; set; }
        public Guid ClassNameId { get; set; }
        public Guid UserId { get; set; }
        public string StudentName { get; set; }
    }
}
