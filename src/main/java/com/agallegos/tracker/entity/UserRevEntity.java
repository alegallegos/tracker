package com.agallegos.tracker.entity;

import com.agallegos.tracker.security.UserRevisionListener;
import org.hibernate.envers.DefaultRevisionEntity;
import org.hibernate.envers.RevisionEntity;

import javax.persistence.Entity;

@Entity
@RevisionEntity(UserRevisionListener.class)
public class UserRevEntity extends DefaultRevisionEntity {
    private String username;
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}