package com.billingService.billing_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billingService.billing_service.entity.Billing;

public interface BillingRepoistory extends JpaRepository<Billing,Long>{

}
