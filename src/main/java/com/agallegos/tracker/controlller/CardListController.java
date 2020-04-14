package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.CardList;
import com.agallegos.tracker.entity.Comment;
import com.agallegos.tracker.service.CardListService;
import com.agallegos.tracker.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/list")
public class CardListController extends AbstractCRUDController<CardList> {
    @Autowired
    public CardListController(CardListService service) {
        super(service);
    }

    //    @PreAuthorize("isAuthenticated()")
    @GetMapping("/board/{boardId}")
    public ResponseEntity<List<CardList>> list(@PathVariable Long boardId) {
        return new ResponseEntity<List<CardList>>(((CardListService)service).getByBoard(boardId), HttpStatus.OK);
    }
}
