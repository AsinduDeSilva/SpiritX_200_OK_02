package com.example.spirit11.controller;

import com.example.spirit11.dto.UserPlayerDetailsDTO;
import com.example.spirit11.dto.CRUDResponseDTO;
import com.example.spirit11.dto.UserDTO;
import com.example.spirit11.service.UserPlayerDetailsService;
import com.example.spirit11.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private UserPlayerDetailsService userPlayerDetailsService;

    @PostMapping
    public ResponseEntity<CRUDResponseDTO<UserDTO>> addUser(@RequestBody UserDTO userDTO) {
        userService.saveUser(userDTO);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(new CRUDResponseDTO<>(true, "User added successfully"));
    }

    @PostMapping("player")
    public ResponseEntity<CRUDResponseDTO<UserDTO>> addPlayer(@RequestBody UserPlayerDetailsDTO userPlayerDetailsDTO) {
        if(userPlayerDetailsService.addPlayerToUser(userPlayerDetailsDTO)){
            return ResponseEntity.status(HttpStatus.CREATED).body(new CRUDResponseDTO<>(true, "Player added successfully"));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new CRUDResponseDTO<>(false, "Player add failed"));
    }

    @DeleteMapping("player/{userId}/{playerId}")
    public ResponseEntity<CRUDResponseDTO<UserDTO>> removePlayer(@PathVariable Long userId, @PathVariable Long playerId) {
        if(userPlayerDetailsService.removePlayerFromUser(userId, playerId)){
            return ResponseEntity.status(HttpStatus.CREATED).body(new CRUDResponseDTO<>(true, "Player removed successfully"));
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new CRUDResponseDTO<>(false, "Player removal failed"));
    }
}
