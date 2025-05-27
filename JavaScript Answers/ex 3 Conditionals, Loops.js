const events = [
  { name: "Music Fest", date: "2025-07-10", seats: 0 },
  { name: "Art Workshop", date: "2024-12-01", seats: 15 },
  { name: "Food Carnival", date: "2025-05-20", seats: 10 },
];

const today = new Date();

events.forEach(event => {
  const eventDate = new Date(event.date);

  if (eventDate < today) {
    console.log(`${event.name} is in the past and will not be shown.`);
  } else if (event.seats <= 0) {
    console.log(`${event.name} is full.`);
  } else {
    console.log(`Upcoming event: ${event.name}`);
  }
});

// Error handling in registration
function registerForEvent(seats) {
  try {
    if (seats <= 0) throw new Error("No seats available");
    seats--;
    console.log("Registration successful. Seats left:", seats);
  } catch (error) {
    console.error("Registration failed:", error.message);
  }
}
registerForEvent(0);
