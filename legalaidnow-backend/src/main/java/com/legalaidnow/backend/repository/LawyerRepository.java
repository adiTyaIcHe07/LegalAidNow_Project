package com.legalaidnow.backend.repository;

import com.legalaidnow.backend.entity.Lawyer;

import org.springframework.data.jpa.repository.JpaRepository;

// We extend JpaRepository, telling it we want to manage the 'Lawyer' entity,
// and its primary key is of type 'Long'.
// Spring Data JPA will automatically implement all basic CRUD operations for us!
import org.springframework.data.jpa.repository.JpaRepository;

public interface LawyerRepository extends JpaRepository<Lawyer, Long> {
}