package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.AuditModel;
import com.agallegos.tracker.entity.UserRevEntity;
import com.agallegos.tracker.repository.EntityRepository;
import org.springframework.data.history.Revision;
import org.springframework.data.history.RevisionMetadata;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractService<E> {

    public abstract EntityRepository<E> getRepository();

    public E save(E entity) {
        return getRepository().saveAndFlush(entity);
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

        Date dateCreated = null;
        String usernameCreated = null;

        List<Revision<Long, E>> revisions = getRepository().findRevisions(id).get().collect(Collectors.toList());

        for (Revision<Long, E> x : revisions) {
            E entity = x.getEntity();
            if (entity instanceof AuditModel) {
                RevisionMetadata<Long> metadata = x.getMetadata();
                String username = ((UserRevEntity) metadata.getDelegate()).getUsername();
                Instant date = metadata.getRevisionInstant().get(); //TODO check Optional get

                if (metadata.getRevisionType().equals(RevisionMetadata.RevisionType.INSERT)) {
                    dateCreated = Date.from(date);
                    usernameCreated = username;
                    System.out.println("INSERT FOUND"); //TODO fix first history and createdBy null
                } else {
                    System.out.println("OTHER " + metadata.getRevisionType());
                }

                ((AuditModel) entity).setCreatedAt(dateCreated);
                ((AuditModel) entity).setCreatedBy(usernameCreated);

                ((AuditModel) entity).setUpdatedAt(Date.from(date));
                ((AuditModel) entity).setUpdatedBy(username);
            }
            historyList.add(entity);
        }

        return historyList;
    }
}