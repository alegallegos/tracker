package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Comment;
import com.agallegos.tracker.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;

public class CommentController extends AbstractCRUDController<Comment> {
    @Autowired
    public CommentController(CommentService service) {
        super(service);
    }
}
