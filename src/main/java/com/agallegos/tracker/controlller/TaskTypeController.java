package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.TaskType;
import com.agallegos.tracker.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tasktype")
public class TaskTypeController extends AbstractEntityController<TaskType>{

    @Autowired
    public TaskTypeController(AbstractService<TaskType> abstractService) {
        super(abstractService);
    }
}