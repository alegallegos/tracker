package com.agallegos.tracker.service;

import com.agallegos.tracker.repository.EntityRepository;

import java.util.ArrayList;
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

    public List<E> getHistory(Long id) {

        List<E> historyList = new ArrayList<>();

        getRepository().findRevisions(id).get().forEach(x -> {
            //x.getEntity().setEditVersion(x.getMetadata()); //TODO fix setEditVersion
            historyList.add(x.getEntity());
        });

        return historyList;
    }
}