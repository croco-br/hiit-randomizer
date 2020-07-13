using System;
using System.Collections.Generic;

namespace HiitRandomizer.Domain.Entities
{
    public sealed class Exercise
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public int Difficulty { get; private set; }
        public string MuscularGroup { get; private set; }

        public Exercise(int id, string name, int difficulty, string muscularGroup)
        {
            this.Id = id;
            this.Name = name;
            this.Difficulty = difficulty;
            this.MuscularGroup = muscularGroup;
        }
    }
}
