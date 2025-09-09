package com.legalaidnow.backend.service;

import com.legalaidnow.backend.entity.Request;
import com.legalaidnow.backend.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequestService {

    @Autowired
    private RequestRepository requestRepository;

    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    public Request createRequest(Request request) {
        request.setStatus("Pending");
        return requestRepository.save(request);
    }

    public Request updateRequestStatus(Long id, String status) {
        Request existingRequest = requestRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Request not found with id: " + id));

        existingRequest.setStatus(status);
        return requestRepository.save(existingRequest);
    }

    // New method to delete a request
    public void deleteRequest(Long id) {
        if (!requestRepository.existsById(id)) {
            throw new RuntimeException("Request not found with id: " + id);
        }
        requestRepository.deleteById(id);
    }
}