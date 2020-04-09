package com.agallegos.tracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.history.RevisionRepository;

@NoRepositoryBean
public interface EntityRepository<E> extends RevisionRepository<E, Long, Long>, JpaRepository<E, Long> {
}
