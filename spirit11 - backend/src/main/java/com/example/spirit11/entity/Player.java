package com.example.spirit11.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "players")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String university;
    private String category;
    private int totalRuns;
    private int ballsFaced;
    private int inningsPlayed;
    private int wickets;
    private int oversBowled;
    private int runsConceded;
    private boolean isEditable;

    @OneToMany(mappedBy = "player", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<UserPlayerDetails> playerUsers;
}