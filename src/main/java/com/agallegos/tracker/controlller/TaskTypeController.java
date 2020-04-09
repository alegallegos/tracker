package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.TaskType;
import com.agallegos.tracker.service.TaskTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tasktype")
public class TaskTypeController extends AbstractCRUDController<TaskType> {

    @Autowired
    public TaskTypeController(TaskTypeService service) {
        super(service);
    }
}