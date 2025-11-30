package com.authService.auth.entities;

import com.authService.auth.enums.RoleName;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;

    private String password;

    private boolean enabled = true;

    @Enumerated(EnumType.STRING)
    private RoleName roleName;
}
