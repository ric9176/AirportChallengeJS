function Airport(capacity, weatherReporter) {
  const DEFAULT_CAPACITY = 8;
  this.planes = [];
  this.weather = weatherReporter || new Weather();
  this.capacity = capacity || DEFAULT_CAPACITY;
}

Airport.prototype.land_plane = function (plane) {
  if (this.planes.length >= this.capacity) throw "Can't land plane, airport full!";
  if (this.weather.stormy()) throw "Can't land plane, weather is stormy!";
  plane.land();
  this.planes.push(plane);
  return "Plane has landed"
};

Airport.prototype.takeoff_plane = function (plane) {
  if (this.weather.stormy()) throw "Can't take off plane, weather is stormy!";
  plane.takeoff();
  this.planes.pop(plane);
  return "Plane has taken off"
};
