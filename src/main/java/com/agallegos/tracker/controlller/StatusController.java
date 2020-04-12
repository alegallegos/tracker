package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Status;
import com.agallegos.tracker.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/status")
public class StatusController extends AbstractCRUDController<Status> {
    @Autowired
    public StatusController(StatusService service) {
        super(service);
    }
}
