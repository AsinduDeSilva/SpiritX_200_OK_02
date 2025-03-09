package com.example.spirit11.repository;

import com.example.spirit11.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Long> {
    Admin findByCredentials_Username(String username);
}
