function Plane() {
  this.status = "flying";
}

Plane.prototype.land = function () {
  if (this.status === "landed") {
    throw "The plane has already landed!";
  }
  this.status = "landed";
  return "The plane landed";
};

Plane.prototype.takeoff = function () {
  if (this.status === "flying") {
    throw "The plane has already taken off!"
  }
  this.status = "flying";
  return "The plane took off";
};
