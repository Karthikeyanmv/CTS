function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const communityEvent = new Event("Book Fair", "2025-08-15", 20);

console.log(communityEvent.checkAvailability()); // true

console.log(Object.entries(communityEvent)); 
// [["name", "Book Fair"], ["date", "2025-08-15"], ["seats", 20]]
