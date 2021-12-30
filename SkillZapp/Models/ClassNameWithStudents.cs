using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class ClassNameWithStudents
    {
        public Guid ClassNameId { get; set; }
        public Guid StudentId { get; set; }
        public Guid UserId { get; set; }
        public string TeacherName { get; set; }
        public string StudentName { get; set; }
        public string GradeLevelNumber { get; set; }
        public string GradeLevelDescription { get; set; }
    }
}
