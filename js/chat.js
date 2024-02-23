function openForm() {
  var formElement = document.getElementById("myForm");
  if (formElement) {
      formElement.style.display = "block";
  } else {
      console.error("Element with ID 'myForm' not found.");
  }
}

function closeForm() {
  var formElement = document.getElementById("myForm");
  if (formElement) {
      formElement.style.display = "none";
  } else {
      console.error("Element with ID 'myForm' not found.");
  }
}
