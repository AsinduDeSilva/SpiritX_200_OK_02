package com.example.spirit11.entity;

import com.example.spirit11.enums.RoleTypes;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "credentials")
@NoArgsConstructor
public class Credential {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    String username;

    @Column(nullable = false)
    String password;

    public Credential(String username, String password, RoleTypes role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }

    @Enumerated(EnumType.STRING)
    private RoleTypes role;

    @OneToOne(mappedBy = "credentials", cascade = CascadeType.ALL)
    private Admin admin;

    @OneToOne(mappedBy = "credentials", cascade = CascadeType.ALL)
    private User user;

}
