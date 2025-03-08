package com.example.spirit11.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlayerDTO {
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
}
