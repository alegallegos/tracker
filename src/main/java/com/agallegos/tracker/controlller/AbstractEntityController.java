package com.agallegos.tracker.controlller;

import com.agallegos.tracker.service.AbstractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractEntityController<T> {

    private final AbstractService<T> abstractService;

    public AbstractEntityController(AbstractService<T> abstractService) {
        this.abstractService = abstractService;
    }

    @PostMapping("/create")
    public ResponseEntity<T> create(@RequestBody T entity) {
        return new ResponseEntity<T>(abstractService.save(entity), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<T> update(@RequestBody T entity) {
        return new ResponseEntity<T>(abstractService.update(entity), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<T> delete(@RequestBody T entity) {
        abstractService.delete(entity);
        return new ResponseEntity<T>(HttpStatus.OK);
    }

    @GetMapping("/list")
    public ResponseEntity<List<T>> list() {
        return new ResponseEntity<List<T>>(abstractService.list(), HttpStatus.OK);
    }
}
