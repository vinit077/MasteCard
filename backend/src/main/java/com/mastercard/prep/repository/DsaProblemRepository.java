package com.mastercard.prep.repository;

import com.mastercard.prep.entity.DsaProblem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DsaProblemRepository extends JpaRepository<DsaProblem, String> {
}
