// Function to parse query parameters from URL
function getQueryParams() {
  const queryParams = new URLSearchParams(window.location.search);
  const params = {};

  for (const [key, value] of queryParams) {
    params[key] = value;
  }

  return params;
}

// Function to display user information
function displayUserInfo(params) {
  document.getElementById("userName").textContent = params.name || 'N/A';
  document.getElementById("userEmail").textContent = params.email || 'N/A';
  // Add other fields similarly
}

// Get the query parameters from the URL
const queryParams = getQueryParams();

// Call the function to display user information
displayUserInfo(queryParams);
