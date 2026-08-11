package com.mastercard.prep.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class JobApplication {
    @Id
    private String id;
    private String company;
    private String role;
    private String appliedDate;
    private String stage;
    private String referral;

    @Column(length = 2000)
    private String notes;

    public JobApplication() {}

    public JobApplication(String id, String company, String role, String appliedDate, String stage, String referral, String notes) {
        this.id = id;
        this.company = company;
        this.role = role;
        this.appliedDate = appliedDate;
        this.stage = stage;
        this.referral = referral;
        this.notes = notes;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getAppliedDate() { return appliedDate; }
    public void setAppliedDate(String appliedDate) { this.appliedDate = appliedDate; }

    public String getStage() { return stage; }
    public void setStage(String stage) { this.stage = stage; }

    public String getReferral() { return referral; }
    public void setReferral(String referral) { this.referral = referral; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
