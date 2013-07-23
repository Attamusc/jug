define(['chai', 'jug!templates/test'], function(chai, testTmpl) {
  var expect = chai.expect;

  describe('jug', function() {
    it('is requireable', function() {
      expect(testTmpl).to.exist;
    });

    it('can render simple templates', function() {
      expect(testTmpl({title: 'This is awesome'})).to.equal('<h1>This is awesome</h1>');
    });
  });
});
