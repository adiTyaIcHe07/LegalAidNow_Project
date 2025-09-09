package com.legalaidnow.backend.controller;

import com.legalaidnow.backend.entity.Lawyer;
import com.legalaidnow.backend.service.LawyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lawyers")
public class LawyerController {

    @Autowired
    private LawyerService lawyerService;

    @GetMapping
    public List<Lawyer> getAllLawyers() {
        return lawyerService.getAllLawyers();
    }

    @PostMapping
    public Lawyer createLawyer(@RequestBody Lawyer lawyer) {
        return lawyerService.createLawyer(lawyer);
    }

    // New endpoint to delete a lawyer
    @DeleteMapping("/{id}")
    public void deleteLawyer(@PathVariable Long id) {
        lawyerService.deleteLawyer(id);
    }
}