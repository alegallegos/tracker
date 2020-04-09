package com.agallegos.tracker.entity;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Activity { //TODO check if we can remove this entity

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "at", nullable = false, updatable = false)
    @CreatedDate
    private Date at;
    @CreatedBy
    private String by;
    private ActivityType type;

    public enum ActivityType {
        COMMENTED("Commented"),
        CHANGED_PROPERTIES("Changed Properties");

        ActivityType(String c) {
        }
    };

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getAt() {
        return at;
    }

    public void setAt(Date at) {
        this.at = at;
    }

    public String getBy() {
        return by;
    }

    public void setBy(String by) {
        this.by = by;
    }

    public ActivityType getType() {
        return type;
    }

    public void setType(ActivityType type) {
        this.type = type;
    }
}


