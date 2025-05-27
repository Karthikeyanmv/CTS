const events = [
  { name: "Dance Party", category: "music" },
  { name: "Art Class", category: "art" }
];

// Add new event
events.push({ name: "Guitar Workshop", category: "music" });

// Filter music events
const musicEvents = events.filter(event => event.category === "music");

// Map for display format
const displayCards = musicEvents.map(event => `Workshop on ${event.name}`);

console.log(displayCards); // ["Workshop on Dance Party", "Workshop on Guitar Workshop"]
