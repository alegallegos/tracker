package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Status;
import com.agallegos.tracker.service.StatusService;
import org.springframework.beans.factory.annotation.Autowired;

public class StatusController extends AbstractCRUDController<Status> {
    @Autowired
    public StatusController(StatusService service) {
        super(service);
    }
}
