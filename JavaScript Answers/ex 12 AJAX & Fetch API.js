const userData = {
  name: "Jane Doe",
  email: "jane@example.com",
  event: "Music Festival"
};

function sendRegistration(data) {
  console.log("Sending registration...");
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    console.log("Registration success:", response);
    alert("Registration successful!");
  })
  .catch(() => alert("Failed to register. Please try again."));

  // Simulate delay
  setTimeout(() => console.log("Simulated response delay"), 2000);
}

sendRegistration(userData);
