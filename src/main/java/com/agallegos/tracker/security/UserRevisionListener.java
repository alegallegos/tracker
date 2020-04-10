package com.agallegos.tracker.security;

import com.agallegos.tracker.entity.UserRevEntity;
import org.hibernate.envers.RevisionListener;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class UserRevisionListener implements RevisionListener {

    @Override
    public void newRevision(Object revisionEntity) {
        String userName = Optional.ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .filter(Authentication::isAuthenticated)
                .map(Authentication::getPrincipal)
                .map(String.class::cast).get();

        UserRevEntity exampleRevEntity = (UserRevEntity) revisionEntity;
        exampleRevEntity.setUsername(userName);
    }
}