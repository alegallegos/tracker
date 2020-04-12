package com.agallegos.tracker.repository;

import com.agallegos.tracker.entity.Card;
import com.agallegos.tracker.entity.CardList;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends EntityRepository<Card> {
}
