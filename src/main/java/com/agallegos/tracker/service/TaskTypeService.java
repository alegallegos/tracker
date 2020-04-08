package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.entity.TaskType;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.TaskRepository;
import com.agallegos.tracker.repository.TaskTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskTypeService extends AbstractService<TaskType> {

    @Autowired
    private TaskTypeRepository repository;

    public EntityRepository<TaskType> getRepository() {
        return repository;
    }
}
