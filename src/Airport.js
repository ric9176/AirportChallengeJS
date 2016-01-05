function Airport() {
  this.planes = [];
}

Airport.prototype.land_plane = function (plane) {
  this.planes.push(plane);
  return "Plane has landed"
};
