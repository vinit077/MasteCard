package com.mastercard.prep.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class WeekTask {
    @Id
    private String id;
    private Integer weekId;
    private String text;
    private String category;
    private Boolean completed;

    public WeekTask() {}

    public WeekTask(String id, Integer weekId, String text, String category, Boolean completed) {
        this.id = id;
        this.weekId = weekId;
        this.text = text;
        this.category = category;
        this.completed = completed;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public Integer getWeekId() { return weekId; }
    public void setWeekId(Integer weekId) { this.weekId = weekId; }

    public String getText() { return text; }
    public void setText(String text) { this.text = text; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }
}
