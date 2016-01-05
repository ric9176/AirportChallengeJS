function Plane() {
  this.status = "Flying";
}

Plane.prototype.land = function () {
  if (this.status === "Landed") {
    throw "The plane has already landed!";
  }
  this.status = "Landed";
  return "The plane landed";
};

Plane.prototype.takeoff = function () {
  if (this.status === "Flying") {
    throw "The plane has already taken off!"
  }
  this.status = "Flying";
  return "The plane took off";
};
