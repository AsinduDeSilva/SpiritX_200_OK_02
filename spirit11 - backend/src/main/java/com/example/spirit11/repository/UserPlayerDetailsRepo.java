package com.example.spirit11.repository;

import com.example.spirit11.entity.Player;
import com.example.spirit11.entity.User;
import com.example.spirit11.entity.UserPlayerDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserPlayerDetailsRepo extends JpaRepository<UserPlayerDetails, Long> {
    Optional<UserPlayerDetails> findByUserAndPlayer(User user, Player player);
    int countByUser(User user);
}
