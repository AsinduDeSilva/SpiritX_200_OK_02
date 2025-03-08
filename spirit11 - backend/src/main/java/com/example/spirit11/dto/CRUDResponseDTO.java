package com.example.spirit11.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CRUDResponseDTO<T> {
    private boolean success;
    private String message;
    private T data;

    public CRUDResponseDTO(boolean success, String message) {
        this.success = success;
        this.message = message;
    }
}
