describe('counter', function() {
  it("create variable that returns an end of loop", function() {
    expect(counter(30, 7)).to.eql([7, 14, 21, 28]);
  });

});
