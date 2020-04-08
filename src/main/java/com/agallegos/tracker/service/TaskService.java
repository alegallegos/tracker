package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService extends AbstractService<Task> {

    @Autowired
    TaskRepository repository;

    public EntityRepository<Task> getRepository() {
        return repository;
    }
}
