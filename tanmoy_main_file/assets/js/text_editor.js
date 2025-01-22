


// ===== Post Form Image Preview =====


document.getElementById("image").addEventListener("change", function (e) {
  const file = e.target.files[0];
  const preview = document.getElementById("image-preview");
  preview.innerHTML = ""; // Clear any previous content

  if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const img = document.createElement("img");
          img.src = e.target.result;
          preview.appendChild(img);
      };
      reader.readAsDataURL(file);
  } else {
      preview.innerHTML = "<p>No image selected</p>";
  }
});










// ===== Edit =====







// Get references to elements
const editButton = document.getElementById("edit-description");
const editorModal = document.getElementById("editor-modal");
const editorTextarea = document.getElementById("editor-textarea");
const saveEditButton = document.getElementById("save-edit");
const cancelEditButton = document.getElementById("cancel-edit");
const descriptionField = document.getElementById("description");

// Formatting buttons
const boldButton = document.getElementById("editor-bold");
const italicButton = document.getElementById("editor-italic");
const underlineButton = document.getElementById("editor-underline");
const bulletButton = document.getElementById("editor-bullet");
const headingSelect = document.getElementById("editor-heading");

// Open the modal when the edit button is clicked
editButton.addEventListener("click", () => {
editorTextarea.innerHTML = descriptionField.innerHTML; // Load HTML into editor
editorModal.style.display = "flex"; // Show modal
});

// Save changes and close the modal
saveEditButton.addEventListener("click", () => {
descriptionField.innerHTML = editorTextarea.innerHTML; // Save HTML content
editorModal.style.display = "none"; // Hide modal
});

// Cancel editing and close the modal
cancelEditButton.addEventListener("click", () => {
editorModal.style.display = "none"; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener("click", (event) => {
if (event.target === editorModal) {
  editorModal.style.display = "none";
}
});

// Apply formatting
const applyFormatting = (command, value = null) => {
document.execCommand(command, false, value);
};

boldButton.addEventListener("click", () => applyFormatting("bold"));
italicButton.addEventListener("click", () => applyFormatting("italic"));
underlineButton.addEventListener("click", () => applyFormatting("underline"));
bulletButton.addEventListener("click", () => applyFormatting("insertUnorderedList"));
headingSelect.addEventListener("change", () => {
applyFormatting("formatBlock", headingSelect.value);
});





document.getElementById("description").addEventListener("click", () => {
  const descriptionBox = document.getElementById("description");
  if (descriptionBox.contentEditable === "false") {
      // Enable editing when the box is clicked
      descriptionBox.contentEditable = "true";
      descriptionBox.style.border = "1px solid #42a5f5"; // Highlight border while editing
      descriptionBox.style.backgroundColor = "#ffffff"; // Change background when editing starts
      descriptionBox.focus(); // Focus inside the box
      descriptionBox.style.minHeight = "80px"; // Make it behave like a textarea (expandable)
  }
});

document.getElementById("edit-description").addEventListener("click", () => {
  const descriptionBox = document.getElementById("description");
  if (descriptionBox.contentEditable === "true") {
      // Save content and disable editing
      descriptionBox.contentEditable = "false";
      descriptionBox.style.border = "1px solid #ddd"; // Reset border style
      descriptionBox.style.backgroundColor = "#f9f9f9"; // Revert background color
      descriptionBox.style.minHeight = "40px"; // Restore original height
  }
});










// ===== Alert After Submit the post  =====


document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const alertBox = document.getElementById("alert-box");
  const overlay = document.getElementById("overlay");

  // Set the content of the alert box
  alertBox.innerHTML = `
      <span class="checkmark">✔</span> <br>
      Thank You for Contributing! <br> It will be posted after verification by the Blog Administrator.
  `;

  // Show the overlay and alert box
  overlay.style.display = "block";
  alertBox.style.display = "block";
  alertBox.style.opacity = 1;

  // Hide the alert box and overlay after 4 seconds
  setTimeout(() => {
      alertBox.style.opacity = 0; // Fade out the alert box
      overlay.style.display = "none"; // Hide the overlay
      setTimeout(() => {
          alertBox.style.display = "none"; // Hide the alert box completely
          location.reload();  // Refresh the page
      }, 300);  // Wait for fade-out to complete
  }, 4000);  // 4 seconds delay
});

