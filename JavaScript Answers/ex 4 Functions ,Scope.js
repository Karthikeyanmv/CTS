function addEvent(eventList, event) {
  eventList.push(event);
}

function registerUser(event) {
  if (event.seats > 0) {
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } else {
    console.log(`No seats left for ${event.name}`);
  }
}

function filterEventsByCategory(events, category, callback) {
  const filtered = events.filter(ev => ev.category === category);
  callback(filtered);
}

// Closure to track total registrations per category
function createRegistrationCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const musicRegistrations = createRegistrationCounter();

const events = [
  { name: "Jazz Night", category: "music", seats: 10 },
  { name: "Coding Workshop", category: "tech", seats: 5 }
];

filterEventsByCategory(events, "music", (filtered) => {
  console.log("Filtered music events:", filtered);
  filtered.forEach(event => {
    registerUser(event);
    console.log("Total music registrations:", musicRegistrations());
  });
});
