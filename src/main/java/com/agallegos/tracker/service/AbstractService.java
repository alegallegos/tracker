package com.agallegos.tracker.service;

import com.agallegos.tracker.repository.EntityRepository;

import java.util.List;

public abstract class AbstractService<E> {

    public abstract EntityRepository<E> getRepository();

    public E save(E entity) {
        return getRepository().save(entity);
    }

    public E update(E entity) {
        return getRepository().save(entity);
    }

    public void delete(E entity) {
        getRepository().delete(entity);
    }

    public List<E> list() {
        return getRepository().findAll();
    }
}