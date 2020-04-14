package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Board;
import com.agallegos.tracker.entity.Status;
import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.entity.TaskType;
import com.agallegos.tracker.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService extends AbstractService<Task> {

    @Autowired
    TaskRepository repository;

    @Autowired
    TaskTypeRepository taskTypeRepository;

    @Autowired
    BoardRepository boardRepository;

    @Autowired
    StatusRepository statusRepository;

    public EntityRepository<Task> getRepository() {
        return repository;
    }

}
