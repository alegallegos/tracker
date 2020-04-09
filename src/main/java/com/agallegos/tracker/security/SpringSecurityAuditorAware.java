package com.agallegos.tracker.security;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
class SpringSecurityAuditorAware implements AuditorAware<String> {

    public Optional<String> getCurrentAuditor() {

        return Optional.ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .filter(Authentication::isAuthenticated)
                .map(Authentication::getPrincipal)
//                .map(authentication -> {
//                    System.out.println(authentication);
//                    System.out.println(authentication.getDetails());
//                    System.out.println(authentication.getName());
//                    System.out.println(authentication.getCredentials());
//                    return authentication.getPrincipal();
//                })
                .map(String.class::cast);
    }
}