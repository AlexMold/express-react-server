import React from 'react'
import ReactDom from "react-dom";
import AvatarCropper from "react-avatar-cropper"

var AvatarCrop = React.createClass({
  getInitialState: function() {
    return {
      cropperOpen: false,
      img: null,
      croppedImg: "http://www.fillmurray.com/400/400"
    };
  },
  tested: function() {
  	console.log('Test!!!');
  },
  handleFileChange: function(dataURI) {
    this.setState({
      img: dataURI,
      croppedImg: this.state.croppedImg,
      cropperOpen: true
    });
  },
  deleteImage: function(e) {
  	e.preventDefault();
  	this.replaceState(this.getInitialState())
  },
  handleCrop: function(dataURI) {
    this.setState({
      cropperOpen: false,
      img: null,
      croppedImg: dataURI
    });
  },
  handleRequestHide: function() {
    this.setState({
      cropperOpen: false
    });
  },
  render () {
  	const { control } = this.props;

    return (
      <div>
        <div className="avatar-photo">
          <FileUpload handleFileChange={this.handleFileChange} />
          <button onClick={this.deleteImage} >Delete Avatar</button>
          <br />
          <img src={this.state.croppedImg}/>
          <input type="hidden" name={control.feature_id} value={this.state.croppedImg} defaultValue="Hello!"/>	
        </div>
        {this.state.cropperOpen &&
          <AvatarCropper
            onRequestHide={this.handleRequestHide}
            cropperOpen={this.state.cropperOpen}
            onCrop={this.handleCrop}
            image={this.state.img}
            width={400}
            height={400}
          />
        }
      </div>
    );
  }
});

var FileUpload = React.createClass({
  handleFile: function(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    console.log(file.name);
    if (!file) return;

    reader.onload = function(img) {
      ReactDom.findDOMNode(this.refs.in).value = '';
      this.props.handleFileChange(img.target.result);
    }.bind(this);
    reader.readAsDataURL(file);
  },

  render: function() {
    return (
      <input ref="in" type="file" accept="image/*" onChange={this.handleFile} />
    );
  }
});


export default AvatarCrop