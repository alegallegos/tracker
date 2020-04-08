package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Task;
import com.agallegos.tracker.service.AbstractService;
import com.agallegos.tracker.service.TaskService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/task")
public class TaskController extends AbstractEntityController<Task>{

    public TaskController(TaskService service) {
        super(service);
    }
}
