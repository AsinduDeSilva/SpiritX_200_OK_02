package com.example.spirit11.service;

import com.example.spirit11.dto.PlayerDTO;
import com.example.spirit11.entity.Player;
import com.example.spirit11.repository.PlayerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlayerService {

    @Autowired
    private PlayerRepo playerRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<PlayerDTO> getAllPlayers() {
        return playerRepo.findAll().stream()
                .map(player -> modelMapper.map(player, PlayerDTO.class))
                .collect(Collectors.toList());
    }

    public Optional<PlayerDTO> getPlayerById(Long id) {

        return Optional.ofNullable(modelMapper.map(playerRepo.findById(id).get(), PlayerDTO.class));
    }

    public void savePlayer(PlayerDTO playerDTO) {
        playerRepo.save(modelMapper.map(playerDTO, Player.class));
    }

    public void updatePlayer(PlayerDTO playerDTO) {
        playerRepo.save(modelMapper.map(playerDTO, Player.class));
    }

    public void deletePlayer(Long id) {
        playerRepo.deleteById(id);
    }
}