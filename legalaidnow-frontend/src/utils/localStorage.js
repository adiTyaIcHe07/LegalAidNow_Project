// --- Functions for Legal Requests ---

// Get all requests from local storage
export const getRequests = () => {
  const requests = localStorage.getItem('legalAid_requests');
  return requests ? JSON.parse(requests) : [];
};

// Save a new request
export const saveRequest = (newRequest) => {
  const requests = getRequests();
  requests.push(newRequest);
  localStorage.setItem('legalAid_requests', JSON.stringify(requests));
};

// Update the status of a specific request by its ID
export const updateRequestStatus = (requestId, newStatus) => {
    const requests = getRequests();
    const updatedRequests = requests.map(req => 
        req.id === requestId ? { ...req, status: newStatus } : req
    );
    localStorage.setItem('legalAid_requests', JSON.stringify(updatedRequests));
};


// --- Functions for Lawyers ---

// Get all lawyers from local storage
export const getLawyers = () => {
  const lawyers = localStorage.getItem('legalAid_lawyers');
  return lawyers ? JSON.parse(lawyers) : [];
};

// Save a new lawyer
export const saveLawyer = (newLawyer) => {
  const lawyers = getLawyers();
  lawyers.push(newLawyer);
  localStorage.setItem('legalAid_lawyers', JSON.stringify(lawyers));
};