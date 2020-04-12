package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.*;
import com.agallegos.tracker.repository.CardListRepository;
import com.agallegos.tracker.repository.CardRepository;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;

@Service
public class CardService extends AbstractService<Card> {

    @Autowired
    private CardRepository repository;

    @Autowired
    private CardListRepository cardListRepository;

    @Override
    public EntityRepository<Card> getRepository() {
        return repository;
    }

    @Override
    public Card save(Card entity) {
        CardList cardList = cardListRepository
                .findById(entity.getList().getId())
                .orElseThrow(() -> new RuntimeException(MessageFormat.format("List not found {0}", entity.getList().getId())));

        entity.setList(cardList);

        cardList.getCards().add(entity);

        cardListRepository.save(cardList);

        return entity;
    }

    public Card addToList(Long listId, Card entity) {
        CardList list = new CardList();
        list.setId(listId);
        entity.setList(list);
        return save(entity);
    }
}
