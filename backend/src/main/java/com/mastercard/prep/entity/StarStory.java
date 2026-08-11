package com.mastercard.prep.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class StarStory {
    @Id
    private String id;
    private String title;

    @Column(length = 1000)
    private String prompt;

    @Column(length = 2000)
    private String situation;

    @Column(length = 2000)
    private String task;

    @Column(length = 2000)
    private String action;

    @Column(length = 2000)
    private String result;

    public StarStory() {}

    public StarStory(String id, String title, String prompt, String situation, String task, String action, String result) {
        this.id = id;
        this.title = title;
        this.prompt = prompt;
        this.situation = situation;
        this.task = task;
        this.action = action;
        this.result = result;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getPrompt() { return prompt; }
    public void setPrompt(String prompt) { this.prompt = prompt; }

    public String getSituation() { return situation; }
    public void setSituation(String situation) { this.situation = situation; }

    public String getTask() { return task; }
    public void setTask(String task) { this.task = task; }

    public String getAction() { return action; }
    public void setAction(String action) { this.action = action; }

    public String getResult() { return result; }
    public void setResult(String result) { this.result = result; }
}
