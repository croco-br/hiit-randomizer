using System;
using System.Collections.Generic;

namespace HiitRandomizer.Domain.Entities
{
    public sealed class Training
    {
        public int Id { get; private set; }
        public List<Exercise> Exercises { get; private set; }
        public int Difficulty { get; private set; }
        public List<string> MuscularGroup { get; private set; }

        public Training(int id, List<Exercise> exercises, int difficulty, List<string> muscularGroup)
        {
            Id = id;
            Exercises = exercises;
            Difficulty = difficulty;
            MuscularGroup = muscularGroup;
        }
    }
}
