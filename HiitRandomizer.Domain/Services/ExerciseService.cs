using System;
using System.Collections.Generic;
using HiitRandomizer.Domain.Entities;
using HiitRandomizer.Domain.Interfaces.Services;

namespace HiitRandomizer.Domain
{
    public class ExerciseService : IExerciseService
    {
        public ExerciseService()
        {
        }

        public List<Exercise> GetAvailableExercises()
        {
            return new List<Exercise>(){
                    new Exercise(1,"Triceps", 8, "Braços"),
                    new Exercise(1,"Biceps", 4, "Braços"),
                    new Exercise(1,"Remada Alta", 6, "Peito"),
            };
        }

    }
}
