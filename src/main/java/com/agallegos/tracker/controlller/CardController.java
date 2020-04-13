package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Card;
import com.agallegos.tracker.entity.CardList;
import com.agallegos.tracker.entity.Comment;
import com.agallegos.tracker.service.CardService;
import com.agallegos.tracker.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/list/card")
public class CardController extends AbstractCRUDController<Card> {
    @Autowired
    public CardController(CardService service) {
        super(service);
    }

    @PostMapping("/{listId}/add")
    public ResponseEntity<Card> add(@PathVariable Long listId, @RequestBody @Valid Card entity) { //TODO check @Valid annotation
        return new ResponseEntity<Card>(((CardService)service).addToList(listId, entity), HttpStatus.OK);
    }

}
