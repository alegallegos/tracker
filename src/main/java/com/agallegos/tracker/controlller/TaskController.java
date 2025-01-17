package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/task")
public class TaskController extends AbstractCRUDController<Task> {

    @Autowired
    public TaskController(TaskService service) {
        super(service);
    }
}
