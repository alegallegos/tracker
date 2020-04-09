package com.agallegos.tracker.controlller;

import com.agallegos.tracker.entity.Board;
import com.agallegos.tracker.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/board")
public class BoardController extends AbstractCRUDController<Board> {

    @Autowired
    public BoardController(BoardService service) {
        super(service);
    }
}