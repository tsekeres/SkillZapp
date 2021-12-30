using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SkillZapp.DataAccess
{
    public class ClassNameWithGL
    {
        readonly string _connectionString;
        public ClassNameRepository(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("SkillZapp");
        }

    }
}
