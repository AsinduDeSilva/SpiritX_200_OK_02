package com.example.spirit11.service;

import com.example.spirit11.dto.UserPlayerDetailsDTO;
import com.example.spirit11.entity.Player;
import com.example.spirit11.entity.User;
import com.example.spirit11.entity.UserPlayerDetails;
import com.example.spirit11.repository.PlayerRepo;
import com.example.spirit11.repository.UserPlayerDetailsRepo;
import com.example.spirit11.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserPlayerDetailsService {

    @Autowired
    private UserPlayerDetailsRepo userPlayerRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private PlayerRepo playerRepo;


    public boolean addPlayerToUser(UserPlayerDetailsDTO userPlayerDetailsDTO) {
        Optional<User> userOptional = userRepo.findById(userPlayerDetailsDTO.getUserId());
        Optional<Player> playerOptional = playerRepo.findById(userPlayerDetailsDTO.getPlayerId());

        if(userOptional.isEmpty() || playerOptional.isEmpty() || getPlayersCountOfUser(userOptional.get()) > 11) {
            return false;
        }


        UserPlayerDetails userPlayerDetails = new UserPlayerDetails();
        userPlayerDetails.setUser(userOptional.get());
        userPlayerDetails.setPlayer(playerOptional.get());
        userPlayerDetails.setValue(userPlayerDetailsDTO.getValue());
        userPlayerRepo.save(userPlayerDetails);

        return true;
    }

    public boolean removePlayerFromUser(Long userId, Long playerId) {
        Optional<User> userOptional = userRepo.findById(userId);
        Optional<Player> playerOptional = playerRepo.findById(playerId);

        if(userOptional.isEmpty() || playerOptional.isEmpty()) {
            return false;
        }

        Optional<UserPlayerDetails> userPlayerDetailsOptional =
                userPlayerRepo.findByUserAndPlayer(userOptional.get(), playerOptional.get());

        if(userPlayerDetailsOptional.isEmpty()) {
            return false;
        }

        userPlayerRepo.delete(userPlayerDetailsOptional.get());
        return true;
    }

    public int getPlayersCountOfUser(User user) {
        return userPlayerRepo.countByUser(user);
    }
}
