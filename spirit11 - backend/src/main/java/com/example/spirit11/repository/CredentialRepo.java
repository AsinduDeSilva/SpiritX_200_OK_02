package com.example.spirit11.repository;

import com.example.spirit11.entity.Credential;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CredentialRepo extends JpaRepository<Credential, Integer> {
}
