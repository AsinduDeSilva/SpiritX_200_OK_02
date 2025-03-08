package com.example.spirit11.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserPlayerDetailsDTO {
    private Long userId;
    private Long playerId;
    private double value;
}
