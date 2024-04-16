// Getting elements
var outputScreen = document.getElementById("output-screen");

// Function for adding next_next numbers
function display(num) {
  outputScreen.value += num;
}

// Function for calculate and error alert
function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Invalid");
  }
}

// Function for clear screen
function Clear() {
  outputScreen.value = "";
}

// Function for delete
function del() {
  outputScreen.value = outputScreen.value.slice(1, 0);
}
