using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class GradeLevel
    {
        public Guid Id { get; set; }
        public Guid StandardId { get; set; }
        public string GradeLevelNumber { get; set; }
        public string GradeLevelDescription { get; set; }
    }
}
