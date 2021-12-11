using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class Subcomponent
    {
        public Guid Id { get; set; }
        public Guid ComponentId { get; set; }
        public string SubcomponentName { get; set; }
    }
}
