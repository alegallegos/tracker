package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Comment;
import com.agallegos.tracker.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment")
public class CommentController extends AbstractCRUDController<Comment> {
    @Autowired
    public CommentController(CommentService service) {
        super(service);
    }
}
