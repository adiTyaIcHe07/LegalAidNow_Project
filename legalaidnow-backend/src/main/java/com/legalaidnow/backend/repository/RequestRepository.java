package com.legalaidnow.backend.repository;

import com.legalaidnow.backend.entity.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Long> {
}