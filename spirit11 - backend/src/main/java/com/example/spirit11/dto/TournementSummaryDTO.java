package com.example.spirit11.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TournementSummaryDTO {
    private int overallRuns;
    private int overallWickets;
    private PlayerDTO highestRunScorer;
    private PlayerDTO highestWicketTaker;
}
