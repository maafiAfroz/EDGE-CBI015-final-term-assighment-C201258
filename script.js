// Open the modal
document.getElementById("bookNowBtn").addEventListener("click", () => {
    document.getElementById("popupModal").classList.remove("hidden");
  });
  
  // Close the modal
  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("popupModal").classList.add("hidden");
  });
  
  // Submit the form
  document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission
    document.getElementById("popupModal").classList.add("hidden");
    document.getElementById("confirmationMessage").classList.remove("hidden");
  });
  
  // Close the confirmation message
  document.getElementById("closeConfirmation").addEventListener("click", () => {
    document.getElementById("confirmationMessage").classList.add("hidden");
  });
  