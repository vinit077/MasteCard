package com.mastercard.prep.repository;

import com.mastercard.prep.entity.WeekTask;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WeekTaskRepository extends JpaRepository<WeekTask, String> {
    List<WeekTask> findByWeekId(Integer weekId);
}
