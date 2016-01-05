describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it("should return true if weather is stormy", function() {
    expect(weather.stormy()).toEqual(true);
  })
})
