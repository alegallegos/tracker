package com.agallegos.tracker.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Task extends AuditModel{

    //TODO add status for tasks
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String name;
    private String description;

    @ManyToOne(optional = false, cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private TaskType type;

    @ManyToOne(optional = false, cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    private Board board;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public TaskType getType() {
        return type;
    }

    public void setType(TaskType type) {
        this.type = type;
    }

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }
}
