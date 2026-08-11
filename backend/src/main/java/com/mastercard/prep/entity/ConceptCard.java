package com.mastercard.prep.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class ConceptCard {
    @Id
    private String id;
    private String module;

    @Column(length = 1000)
    private String question;

    @Column(length = 3000)
    private String answer;
    
    private String mastery;

    public ConceptCard() {}

    public ConceptCard(String id, String module, String question, String answer, String mastery) {
        this.id = id;
        this.module = module;
        this.question = question;
        this.answer = answer;
        this.mastery = mastery;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getModule() { return module; }
    public void setModule(String module) { this.module = module; }

    public String getQuestion() { return question; }
    public void setQuestion(String question) { this.question = question; }

    public String getAnswer() { return answer; }
    public void setAnswer(String answer) { this.answer = answer; }

    public String getMastery() { return mastery; }
    public void setMastery(String mastery) { this.mastery = mastery; }
}
