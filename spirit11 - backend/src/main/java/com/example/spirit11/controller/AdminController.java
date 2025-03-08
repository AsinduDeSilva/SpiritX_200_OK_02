package com.example.spirit11.controller;

import com.example.spirit11.dto.CRUDResponseDTO;
import com.example.spirit11.dto.TournementSummaryDTO;
import com.example.spirit11.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admin")
public class AdminController {

    @Autowired
    private PlayerService playerService;


    @GetMapping("summary")
    public ResponseEntity<CRUDResponseDTO<TournementSummaryDTO>> getTournementSummary() {
        return ResponseEntity.ok(new CRUDResponseDTO<>(true, "success", playerService.getTournementSummary()));
    }
}
