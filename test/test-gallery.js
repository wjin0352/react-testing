var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Gallery = require('../gallery');
var Image = require('../image');

var images = [
  <Image url="http://www.example.com/image1.png" description="sample 1"/>,
  <Image url="http://www.example.com/image2.png" description="sample 2"/>,
  <Image url="http://www.example.com/image3.png" description="sample 3"/>
];

describe('Gallery component', function() {
  it('Renders the gallery with image components', function() {
    var url = "http://www.example.com/image.png";
    var description = "Example description";

    var renderer = TestUtils.createRenderer();
    renderer.render(<Gallery url={url} description={description} images={images}/>);
    var result = renderer.getRenderOutput();
    result.props.className.should.equal('gallery');
  })
})
