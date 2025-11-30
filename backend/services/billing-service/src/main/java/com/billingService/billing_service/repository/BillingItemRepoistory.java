package com.billingService.billing_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.billingService.billing_service.entity.BillingItem;

public interface BillingItemRepoistory extends JpaRepository<BillingItem,Long>{

}
