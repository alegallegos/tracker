package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.entity.TaskType;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.TaskRepository;
import com.agallegos.tracker.repository.TaskTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService extends AbstractService<Task> {

    @Autowired
    TaskRepository repository;

    @Autowired
    TaskTypeRepository taskTypeRepository;

    public EntityRepository<Task> getRepository() {
        return repository;
    }

    @Override
    public Task save(Task entity) {
        TaskType taskType = taskTypeRepository.findById(entity.getType().getId()).orElse(null); //TODO refactor Optional usage

        if(taskType == null) {
            throw new RuntimeException("type not found"); //TODO refactor
        }

        entity.setType(taskType);

        return super.save(entity);
    }
}
