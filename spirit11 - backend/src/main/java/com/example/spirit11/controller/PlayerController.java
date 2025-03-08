package com.example.spirit11.controller;

import com.example.spirit11.dto.CRUDResponseDTO;
import com.example.spirit11.dto.PlayerDTO;
import com.example.spirit11.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
        PlayerDTO player = playerService.getPlayerById(id);
        if(player == null) {
            return ResponseEntity
                    .status(HttpStatus.NOT_FOUND)
                    .body(new CRUDResponseDTO<>(false, "Player not found"));
        }
        return ResponseEntity.ok(new CRUDResponseDTO<>(true, "Player found", player));
    }

    @GetMapping("category/{category}")
    public List<PlayerDTO> getPlayerByCategory(@PathVariable String category) {
        return playerService.getAllPlayersByCategory(category);
    }

    @PostMapping
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> addPlayer(@RequestBody PlayerDTO playerDTO) {
        playerService.savePlayer(playerDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new CRUDResponseDTO<>(true, "Successfully added player"));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> updatePlayer(@PathVariable Long id, @RequestBody PlayerDTO playerDTO) {
        boolean isUpdated = playerService.updatePlayer(id, playerDTO);
        if(isUpdated) {
            return ResponseEntity.ok(new CRUDResponseDTO<>(true, "Successfully updated player"));
        }
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new CRUDResponseDTO<>(false, "Player update failed"));

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<CRUDResponseDTO<PlayerDTO>> deletePlayer(@PathVariable Long id) {
        playerService.deletePlayer(id);
        return ResponseEntity.ok(new CRUDResponseDTO<>(true, "Successfully deleted player"));
    }

}
