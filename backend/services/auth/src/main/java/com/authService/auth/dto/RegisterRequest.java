package com.authService.auth.dto;

import com.authService.auth.enums.RoleName;
import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String password;
    private RoleName roleName;
}
