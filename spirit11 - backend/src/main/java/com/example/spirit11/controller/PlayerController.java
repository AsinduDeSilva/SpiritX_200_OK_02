package com.example.spirit11.controller;

import com.example.spirit11.dto.CRUDResponseDTO;
import com.example.spirit11.dto.PlayerDTO;
import com.example.spirit11.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("player")
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @GetMapping
    public List<PlayerDTO> getAllPlayers() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> getPlayerById(@PathVariable Long id) {
        Optional<PlayerDTO> player = playerService.getPlayerById(id);
        return player.map(playerDTO -> ResponseEntity.ok(new CRUDResponseDTO<>(true, "Player found", playerDTO)))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).body(new CRUDResponseDTO<>(false, "Player not found"))
        );
    }

    @PostMapping
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> addPlayer(@RequestBody PlayerDTO playerDTO) {
        playerService.savePlayer(playerDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new CRUDResponseDTO<>(true, "Successfully added player"));
    }

    @PutMapping
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> updatePlayer(@RequestBody PlayerDTO playerDTO) {
        playerService.updatePlayer(playerDTO);
        return ResponseEntity.ok(new CRUDResponseDTO<>(true, "Successfully updated player"));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> deletePlayer(@PathVariable Long id) {
        playerService.deletePlayer(id);
        return ResponseEntity.ok(new CRUDResponseDTO<>(true, "Successfully deleted player"));
    }

}
