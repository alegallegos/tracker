package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Board;
import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.repository.BoardRepository;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BoardService extends AbstractService<Board> {

    @Autowired
    private BoardRepository repository;

    @Autowired
    private TaskRepository taskRepository;

    public EntityRepository<Board> getRepository() {
        return repository;
    }

    public Task addTask(Long boardId, Task task) {
        return repository.findById(boardId).map(board -> {
            task.setBoard(board);
            return taskRepository.save(task);
        }).orElseThrow(() -> new ResourceNotFoundException("PostId " + boardId + " not found"));
    }
}