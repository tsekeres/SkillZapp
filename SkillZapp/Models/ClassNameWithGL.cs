﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.Models
{
    public class ClassNameWithGL
    {
        public Guid Id { get; set; }
        public Guid GradeLevelId { get; set; }
        public Guid UserId { get; set; }
        public string TeacherName { get; set; }
        public string GradeLevelNumber { get; set; }
        public string GradeLevelDescription { get; set; }

    }
}
