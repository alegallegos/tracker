package com.agallegos.tracker.repository;

import com.agallegos.tracker.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends EntityRepository<Task> {
}
