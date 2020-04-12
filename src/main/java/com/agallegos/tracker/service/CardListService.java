package com.agallegos.tracker.service;

import com.agallegos.tracker.entity.Board;
import com.agallegos.tracker.entity.Card;
import com.agallegos.tracker.entity.CardList;
import com.agallegos.tracker.entity.Status;
import com.agallegos.tracker.repository.BoardRepository;
import com.agallegos.tracker.repository.CardListRepository;
import com.agallegos.tracker.repository.EntityRepository;
import com.agallegos.tracker.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CardListService extends AbstractService<CardList> {

    @Autowired
    private CardListRepository repository;

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public EntityRepository<CardList> getRepository() {
        return repository;
    }

    public List<CardList> getByBoard(Long boardId) {
        return this.repository.findByBoardId(boardId);
    }

    @Override
    public CardList save(CardList entity) {
        Board board = boardRepository
                .findById(entity.getBoard().getId())
                .orElseThrow(() -> new RuntimeException(MessageFormat.format("Board not found {0}", entity.getBoard().getId())));

        entity.setBoard(board);

        return super.save(entity);
    }
}
