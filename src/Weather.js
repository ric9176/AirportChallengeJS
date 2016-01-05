function Weather() {
}

Weather.prototype.stormy = function () {
  if (Math.floor((Math.random() * 3 ) + 1) != 1) {
     return false;
  };
  return true;
};
