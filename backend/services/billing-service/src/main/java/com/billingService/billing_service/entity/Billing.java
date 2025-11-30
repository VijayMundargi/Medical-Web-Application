package com.billingService.billing_service.entity;

import com.billingService.billing_service.enums.PayementMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "billing")
public class Billing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;

    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    private PayementMethod payementMethod;

    @OneToMany(mappedBy = "billing", 
               cascade = CascadeType.ALL, 
               orphanRemoval = true)
    private List<BillingItem> itemLists;

}
