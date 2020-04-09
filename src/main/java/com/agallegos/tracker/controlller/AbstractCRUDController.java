package com.agallegos.tracker.controlller;

import com.agallegos.tracker.service.AbstractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public abstract class AbstractCRUDController<T> {

    protected final AbstractService<T> service;

    public AbstractCRUDController(AbstractService<T> service) {
        this.service = service;
    }

    @PostMapping("/create")
    public ResponseEntity<T> create(@RequestBody T entity) { //TODO check @Valid annotation
        return new ResponseEntity<T>(service.save(entity), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<T> update(@RequestBody T entity) {
        return new ResponseEntity<T>(service.update(entity), HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<T> delete(@RequestBody T entity) {
        service.delete(entity);
        return new ResponseEntity<T>(HttpStatus.OK);
    }

    @GetMapping("/list") //TODO check Pageable
    public ResponseEntity<List<T>> list() {
        return new ResponseEntity<List<T>>(service.list(), HttpStatus.OK);
    }
}
