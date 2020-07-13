using System;
using System.Collections.Generic;
using HiitRandomizer.Domain.Entities;

namespace HiitRandomizer.Domain.Interfaces.Services
{
    public interface IExerciseService
    {
       List<Exercise> GetAvailableExercises();
    }
}
