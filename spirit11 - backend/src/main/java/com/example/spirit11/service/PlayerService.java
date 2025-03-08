package com.example.spirit11.service;

import com.example.spirit11.dto.PlayerDTO;
import com.example.spirit11.dto.TournementSummaryDTO;
import com.example.spirit11.entity.Player;
import com.example.spirit11.repository.PlayerRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
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

    public PlayerDTO getPlayerById(Long id) {
        if(playerRepo.findById(id).isPresent()) {
            return modelMapper.map(playerRepo.findById(id).get(), PlayerDTO.class);
        }
        return null;
    }

    public void savePlayer(PlayerDTO playerDTO) {
        playerDTO.setEditable(true);
        playerRepo.save(modelMapper.map(playerDTO, Player.class));
    }

    public boolean updatePlayer(Long id, PlayerDTO playerDTO) {
        Optional<Player> player = playerRepo.findById(id);
        if(player.isEmpty()) {
            return false;
        }
        Player player1 = player.get();

        player1.setName(playerDTO.getName());
        player1.setCategory(playerDTO.getCategory());
        player1.setTotalRuns(playerDTO.getTotalRuns());
        player1.setBallsFaced(playerDTO.getBallsFaced());
        player1.setInningsPlayed(playerDTO.getInningsPlayed());
        player1.setWickets(playerDTO.getWickets());
        player1.setOversBowled(playerDTO.getOversBowled());
        player1.setRunsConceded(playerDTO.getRunsConceded());

        playerRepo.save(player1);
        return true;
    }

    public void deletePlayer(Long id) {
        playerRepo.deleteById(id);
    }

    public List<PlayerDTO> getAllPlayersByCategory(String category) {
        return playerRepo.findByCategory(category).stream()
                .map(player -> modelMapper.map(player, PlayerDTO.class))
                .collect(Collectors.toList());
    }

}