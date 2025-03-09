package com.example.spirit11.controller;

import com.example.spirit11.dto.AuthResponseDTO;
import com.example.spirit11.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @GetMapping
    public ResponseEntity<AuthResponseDTO> auth() {
        return ResponseEntity.ok().body(authService.auth());
    }
}
