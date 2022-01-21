using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class StudentAssessment
    {
        public Guid StudentAssessmentId { get; set; }
        public Guid StudentId { get; set; }
        public Guid ClassNameId { get; set; }
        public Guid AssessmentId { get; set; }
        public Guid UserId { get; set; }
        public string StudentName { get; set; }
        public string TeacherName { get; set; }
        public string GradeLevelDescription { get; set; }
        public string StandardName { get; set; }
        public DateTime AssessmentDate { get; set; }
        public string Score { get; set; }
    }
}
