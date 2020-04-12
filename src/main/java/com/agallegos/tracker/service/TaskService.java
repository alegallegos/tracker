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

    @Override
    public Task save(Task entity) {
        //for now all task will be of type TASK
        // TODO refactor this
        TaskType taskType = taskTypeRepository.findById(1l).get();
        entity.setType(taskType);

        //TaskType taskType = taskTypeRepository.findById(entity.getType().getId()).orElse(null); //TODO refactor Optional usage, see board addTask

        if (taskType == null) {
            throw new RuntimeException("type not found"); //TODO refactor
        }

        Board board = boardRepository.findById(entity.getBoard().getId()).orElse(null); //TODO refactor Optional usage

        if (board == null) {
            throw new RuntimeException("board not found"); //TODO refactor
        }

        Status status = statusRepository.findById(entity.getStatus().getId()).orElse(null); //TODO refactor Optional usage

        if (status == null) {
            throw new RuntimeException("status not found"); //TODO refactor
        }

        entity.setType(taskType);
        entity.setBoard(board);
        entity.setStatus(status);

        return super.save(entity);
    }

    //TODO implement update
}
