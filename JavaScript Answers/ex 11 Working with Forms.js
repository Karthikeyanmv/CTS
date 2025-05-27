HTML:
<form id="regForm">
  <input name="username" placeholder="Name" required />
  <input name="email" type="email" placeholder="Email" required />
  <select name="event">
    <option value="musicFest">Music Festival</option>
    <option value="artExpo">Art Expo</option>
  </select>
  <button type="submit">Register</button>
</form>
<div id="error"></div>

JS:
const form = document.getElementById("regForm");
const errorDiv = document.getElementById("error");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const username = form.elements["username"].value.trim();
  const email = form.elements["email"].value.trim();

  if (!username) {
    errorDiv.textContent = "Name is required.";
    return;
  }

  if (!email.includes("@")) {
    errorDiv.textContent = "Valid email required.";
    return;
  }

  errorDiv.textContent = "";
  alert(`Thanks for registering, ${username}!`);
  form.reset();
});
