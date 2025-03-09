package com.example.spirit11.service;

import com.example.spirit11.dto.AuthResponseDTO;
import com.example.spirit11.repository.AdminRepo;
import com.example.spirit11.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private UserRepo userRepo;

    public AuthResponseDTO auth(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        String role = authentication.getAuthorities().stream()
                .findFirst()
                .orElseThrow(() -> new RuntimeException("No roles found"))
                .getAuthority();

        Long id;
        if (role.equals("ROLE_ADMIN")) {
            id = adminRepo.findByCredentials_Username(userDetails.getUsername()).getId();
        }else{
            id = userRepo.findByCredentials_Username(userDetails.getUsername()).getId();
        }

        return new AuthResponseDTO(role, id);

    }
}
