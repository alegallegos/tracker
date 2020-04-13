package com.agallegos.tracker.controlller;

import com.agallegos.tracker.service.AbstractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
public abstract class AbstractCRUDController<T> {

    protected final AbstractService<T> service;

    public AbstractCRUDController(AbstractService<T> service) {
        this.service = service;
    }

//    @PreAuthorize("isAuthenticated()")
    @PostMapping("/create")
    public ResponseEntity<T> create(@RequestBody @Valid T entity) {
        return new ResponseEntity<T>(service.save(entity), HttpStatus.OK);
    }

//    @PreAuthorize("isAuthenticated()")
    @PutMapping("/update")
    public ResponseEntity<T> update(@RequestBody @Valid T entity) {
        return new ResponseEntity<T>(service.update(entity), HttpStatus.OK);
    }

//    @PreAuthorize("isAuthenticated()")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<T> delete(@PathVariable Long id) {
        service.delete(id);
        return new ResponseEntity<T>(HttpStatus.OK);
    }

//    @PreAuthorize("isAuthenticated()")
    @GetMapping("/get/{id}")
    public ResponseEntity<T> get(@PathVariable Long id) {
        return new ResponseEntity<T>(service.get(id), HttpStatus.OK);
    }

//    @PreAuthorize("isAuthenticated()")
    @GetMapping("/list") //TODO check Pageable
    public ResponseEntity<List<T>> list() {
        return new ResponseEntity<List<T>>(service.list(), HttpStatus.OK);
    }

//    @PreAuthorize("isAuthenticated()")
    @GetMapping("/history/{id}") //TODO check Pageable
    public ResponseEntity<List<T>> history(@PathVariable Long id) {
        return new ResponseEntity<List<T>>(service.getHistory(id), HttpStatus.OK);
    }
}
