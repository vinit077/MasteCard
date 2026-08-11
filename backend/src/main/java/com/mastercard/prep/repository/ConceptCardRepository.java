package com.mastercard.prep.repository;

import com.mastercard.prep.entity.ConceptCard;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConceptCardRepository extends JpaRepository<ConceptCard, String> {
}
