package com.example.spirit11.repository;

import com.example.spirit11.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    User findByCredentials_Username(String username);
}
