package com.agallegos.tracker.repository;

import com.agallegos.tracker.entity.CardList;
import com.agallegos.tracker.entity.Task;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardListRepository extends EntityRepository<CardList> {

    public List<CardList> findByBoardId(Long boardId);
}
