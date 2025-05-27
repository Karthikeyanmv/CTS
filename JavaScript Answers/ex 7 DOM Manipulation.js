HTML:
<div id="eventsContainer"></div>

JS:
const events = [
  { name: "Community Yoga", date: "2025-07-01", seats: 15 },
  { name: "Gardening 101", date: "2025-07-10", seats: 5 }
];

const container = document.querySelector("#eventsContainer");

events.forEach(event => {
  const card = document.createElement("div");
  card.className = "event-card";
  card.textContent = `${event.name} - ${event.date} (${event.seats} seats left)`;
  container.appendChild(card);
});

