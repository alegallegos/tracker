package com.agallegos.tracker.repository;

import com.agallegos.tracker.entity.Comment;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends EntityRepository<Comment> {
}
