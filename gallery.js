var React = require('react');
var Image = require('./image');

// var images = [
//   <Image url="http://www.example.com/image1.png" description="sample 1"/>,
//   <Image url="http://www.example.com/image2.png" description="sample 2"/>,
//   <Image url="http://www.example.com/image3.png" description="sample 3"/>]

var Gallery = function(props) {
  var images = props.images.map(function(image, index) {
    return <Image url={image.url} description={image.description} key={index}/>;
  });

  return (
    <div className="gallery">{images}</div>
  );
};

module.exports = Gallery;
