using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class StudentAssessment
    {
        public Guid Id { get; set; }
        public Guid StudentNameId { get; set; }
        public Guid AssessmentId { get; set; }
        public Guid UserId { get; set; }
        public string Score { get; set; }
    }
}
