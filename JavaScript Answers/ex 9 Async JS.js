function fetchEvents() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Yoga Retreat", date: "2025-09-01" },
        { name: "Food Festival", date: "2025-10-15" }
      ]);
    }, 1500);
  });
}

console.log("Loading events...");
fetchEvents()
  .then(events => {
    console.log("Events loaded:", events);
  })
  .catch(error => {
    console.error("Failed to load events", error);
  });

// Async/Await version
async function loadEvents() {
  console.log("Loading events async/await...");
  try {
    const events = await fetchEvents();
    console.log("Events loaded async:", events);
  } catch (error) {
    console.error("Error async:", error);
  }
}

loadEvents();
