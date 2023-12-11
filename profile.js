// Simulated user information (replace with actual logic to fetch user data)
const userData = {
  name: "John Doe",
  location: "City",
  nrc: "123456789",
  dob: "1990-01-01",
  email: "johndoe@example.com",
};

// Function to display user information
function displayUserInfo() {
  document.getElementById("userName").textContent = userData.name;
  document.getElementById("userLocation").textContent = userData.location;
  document.getElementById("userNRC").textContent = userData.nrc;
  document.getElementById("userDOB").textContent = userData.dob;
  document.getElementById("userEmail").textContent = userData.email;
}

// Call the function to display user information on page load
window.addEventListener("load", displayUserInfo);

// Simulated update information button functionality (redirects to update page)
document.getElementById("updateInfoButton").addEventListener("click", function() {
  // Redirect to the update information page (replace with actual link)
  window.location.href = "updateinfo.html";
});
