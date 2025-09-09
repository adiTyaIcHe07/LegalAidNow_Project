package com.legalaidnow.backend.controller;

import com.legalaidnow.backend.dto.StatusUpdateRequest;
import com.legalaidnow.backend.entity.Request;
import com.legalaidnow.backend.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
public class RequestController {

    @Autowired
    private RequestService requestService;

    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();
    }

    @PostMapping
    public Request createRequest(@RequestBody Request request) {
        return requestService.createRequest(request);
    }

    @PutMapping("/{id}/status")
    public Request updateStatus(@PathVariable Long id, @RequestBody StatusUpdateRequest statusUpdateRequest) {
        return requestService.updateRequestStatus(id, statusUpdateRequest.getStatus());
    }

    // New endpoint to delete a request
    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        requestService.deleteRequest(id);
    }
}