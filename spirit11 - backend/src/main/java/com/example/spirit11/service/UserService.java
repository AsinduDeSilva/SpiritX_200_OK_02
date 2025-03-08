package com.example.spirit11.service;

import com.example.spirit11.dto.UserDTO;
import com.example.spirit11.entity.Credential;
import com.example.spirit11.entity.User;
import com.example.spirit11.enums.RoleTypes;
import com.example.spirit11.repository.CredentialRepo;
import com.example.spirit11.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CredentialRepo credentialRepo;

    public void saveUser(UserDTO userDTO) {
        Credential credential = new Credential(userDTO.getUsername(), userDTO.getPassword(), RoleTypes.USER);

        User user = new User();
        user.setBudget(9000000);
        user.setCredentials(credential);//Encode password
        credentialRepo.save(credential);
        userRepo.save(user);
    }



}
