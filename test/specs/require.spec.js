define(['chai', 'jug!templates/test'], function(chai, testTmpl) {
  chai.should();

  describe('jug', function() {
    it('is truthy', function() {
      testTmpl({title: 'This is awesome'}).should.equal('<h1>This is awesome</h1>');
    });
  });
});
