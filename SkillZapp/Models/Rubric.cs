using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class Rubric
    {
        public Guid Id { get; set; }
        public Guid StandardId { get; set; }
        public string RubricName { get; set; }
        public string RubricLevelA { get; set; }
        public string RubricLevelB { get; set; }
        public string RubricLevelC { get; set; }
        public string RubricLevelD { get; set; }
    }
}
