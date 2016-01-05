function Airport(capacity) {
  const DEFAULT_CAPACITY = 8;
  this.planes = [];
  if (typeof(capacity)==='undefined') capacity = DEFAULT_CAPACITY;
  this.capacity = capacity
}

Airport.prototype.land_plane = function (plane) {
  if (this.planes.length >= this.capacity) {
    throw "Can't land plane, airport full!"
  }
  plane.land();
  this.planes.push(plane);
  return "Plane has landed"
};

Airport.prototype.takeoff_plane = function (plane) {
  plane.takeoff();
  this.planes.pop(plane);
  return "Plane has taken off"
};
