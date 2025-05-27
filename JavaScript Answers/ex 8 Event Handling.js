HTML:
<select id="categoryFilter">
  <option value="all">All</option>
  <option value="music">Music</option>
  <option value="art">Art</option>
</select>

<input id="searchInput" type="text" placeholder="Search events..." />

<div id="eventList"></div>

JS:
const events = [
  { name: "Jazz Night", category: "music" },
  { name: "Painting Workshop", category: "art" },
  { name: "Rock Concert", category: "music" }
];

const listDiv = document.getElementById("eventList");
const filterSelect = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

function displayEvents(filteredEvents) {
  listDiv.innerHTML = "";
  filteredEvents.forEach(ev => {
    const div = document.createElement("div");
    div.textContent = ev.name;
    listDiv.appendChild(div);

    const btn = document.createElement("button");
    btn.textContent = "Register";
    btn.onclick = () => alert(`Registered for ${ev.name}`);
    div.appendChild(btn);
  });
}

filterSelect.onchange = () => {
  const cat = filterSelect.value;
  let filtered = cat === "all" ? events : events.filter(e => e.category === cat);
  displayEvents(filtered);
};

searchInput.onkeydown = () => {
  const term = searchInput.value.toLowerCase();
  const filtered = events.filter(e => e.name.toLowerCase().includes(term));
  displayEvents(filtered);
};

// Initial display
displayEvents(events);
