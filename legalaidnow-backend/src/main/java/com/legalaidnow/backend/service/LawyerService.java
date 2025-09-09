package com.legalaidnow.backend.service;

import com.legalaidnow.backend.entity.Lawyer;
import com.legalaidnow.backend.repository.LawyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LawyerService {

    @Autowired
    private LawyerRepository lawyerRepository;

    public List<Lawyer> getAllLawyers() {
        return lawyerRepository.findAll();
    }

    public Lawyer createLawyer(Lawyer lawyer) {
        return lawyerRepository.save(lawyer);
    }

    // New method to delete a lawyer
    public void deleteLawyer(Long id) {
        if (!lawyerRepository.existsById(id)) {
            throw new RuntimeException("Lawyer not found with id: " + id);
        }
        lawyerRepository.deleteById(id);
    }
}