package com.agallegos.tracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class TrackerApplication {

    //TODO add security
    //TODO add internationalization
    //TODO add error hanndling
    //TODO add integration tests
    public static void main(String[] args) {
        SpringApplication.run(TrackerApplication.class, args);
    }

}
