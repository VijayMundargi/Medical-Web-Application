package com.billingService.billing_service.service;

import org.springframework.stereotype.Service;

import com.billingService.billing_service.repository.BillingItemRepoistory;
import com.billingService.billing_service.repository.BillingRepoistory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BillingService {
    private final BillingRepoistory billingRepoistory;
    private final BillingItemRepoistory billingItemRepoistory;
}
