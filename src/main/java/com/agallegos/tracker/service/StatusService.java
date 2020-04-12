package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Status;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StatusService extends AbstractService<Status> {

    @Autowired
    private StatusRepository repository;

    @Override
    public EntityRepository<Status> getRepository() {
        return repository;
    }
}
