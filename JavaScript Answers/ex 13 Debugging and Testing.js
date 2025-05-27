function register(formData) {
  console.log("Starting registration...");
  debugger; // breakpoint here

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  })
  .then(res => {
    console.log("Fetch response status:", res.status);
    return res.json();
  })
  .then(data => {
    console.log("Registration response data:", data);
  })
  .catch(err => {
    console.error("Registration error:", err);
  });
}
