using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class Assessment
    {
        public Guid AssessmentId { get; set; }
        public Guid StandardId { get; set; }
        public Guid ClassNameId { get; set; }
        public Guid RubricId { get; set; }
        public Guid UserId { get; set; }
        public DateTime AssessmentDate { get; set; }
    }
}
