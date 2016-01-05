function Airport() {
  this.planes = [];
}

Airport.prototype.land_plane = function (plane) {
  plane.land();
  this.planes.push(plane);
  return "Plane has landed"
};

Airport.prototype.takeoff_plane = function (plane) {
  plane.takeoff();
  this.planes.pop(plane);
  return "Plane has taken off"
};
