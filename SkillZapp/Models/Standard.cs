using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class Standard
    {
        public Guid Id { get; set; }
        public Guid SubcomponentId { get; set; }
        public Guid GradeLevelId { get; set; }
        public string StandardName { get; set; }
        public string StandardDescription { get; set; }
    }
}
