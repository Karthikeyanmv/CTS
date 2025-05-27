const events = [
  { name: "Marathon", category: "sports", seats: 10 },
  { name: "Cooking Class", category: "food", seats: 5 }
];

// Default parameter & destructuring
function registerEvent({ name, seats = 0 } = {}) {
  if (seats > 0) {
    console.log(`Registered for ${name}`);
  } else {
    console.log(`${name} is full`);
  }
}

const clonedEvents = [...events]; // Spread operator clone

clonedEvents.forEach(event => {
  registerEvent(event);
});
