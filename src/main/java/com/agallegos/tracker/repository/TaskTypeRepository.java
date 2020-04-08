package com.agallegos.tracker.repository;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.entity.TaskType;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskTypeRepository extends EntityRepository<TaskType> {
}
