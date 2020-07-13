using System;
using System.Collections.Generic;
using HiitRandomizer.Domain.Entities;

namespace HiitRandomizer.Domain.Applications
{
    public interface ITrainingEngineApplication
    {
        Training GenerateTraining(List<Exercise> exercises);
    }
}
