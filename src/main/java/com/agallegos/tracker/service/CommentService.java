package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Comment;
import com.agallegos.tracker.repository.CommentRepository;
import com.agallegos.tracker.repository.EntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService extends AbstractService<Comment> {

    @Autowired
    private CommentRepository repository;

    @Override
    public EntityRepository<Comment> getRepository() {
        return repository;
    }
}
