describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe("#land", function() {
    it("should return confirmation when the plane has landed", function() {
      expect(plane.land()).toEqual("The plane landed");
    });

    it("should avoid to land a plane already landed", function() {
      plane.land()
      expect( function() { plane.land() } ).toThrow("The plane has already landed!");
    });
  });

  describe("#takeoff", function() {
    it("should return confirmation when the plane took off", function() {
      plane.land()
      expect(plane.takeoff()).toEqual("The plane took off")
    });

    it("should avoid to takeoff a plane already flying", function() {
      expect( function() { plane.takeoff() } ).toThrow("The plane has already taken off!");
    });
  });

});
