package com.mastercard.prep.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class DsaProblem {
    @Id
    private String id;
    private String title;
    private String category;
    private String difficulty;
    private Boolean solved;
    private String leetcodeUrl;

    @Column(length = 2000)
    private String notes;

    public DsaProblem() {}

    public DsaProblem(String id, String title, String category, String difficulty, Boolean solved, String leetcodeUrl, String notes) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.difficulty = difficulty;
        this.solved = solved;
        this.leetcodeUrl = leetcodeUrl;
        this.notes = notes;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }

    public Boolean getSolved() { return solved; }
    public void setSolved(Boolean solved) { this.solved = solved; }

    public String getLeetcodeUrl() { return leetcodeUrl; }
    public void setLeetcodeUrl(String leetcodeUrl) { this.leetcodeUrl = leetcodeUrl; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
