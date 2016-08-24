import React, { Component, PropTypes } from 'react'
// import {Fieldset, Field, createValue} from 'react-forms'
import { Form, FormGroup, FormControl, ControlLabel, Button, Col, Clearfix } from 'react-bootstrap'
import AvatarCrop from "./partials/CropImage";
import serialize from 'form-serialize';

class TopBlock extends Component {
  constructor(props, context) {
    super(props, context);
  }

  onSubmit(e) {
  	e.preventDefault();
  	let tester = serialize(e.target);
  	console.log(tester);
  }

  uploadImage(arr) {
    return arr.map((control, i) => {
	    switch (control.type) {
			case "upload_images":  
				return (
						<AvatarCrop key={i} control={control} />
					);
	    }
    })
  }

  controlsArray(arr) {
    return arr.map((control, i) => {
	    switch (control.type) {
			case "textbox_text":  
				return (
				    <FormGroup key={i}>
				    	<ControlLabel>{control.title.ru}</ControlLabel>
				    	<FormControl type="text" name={control.feature_id} placeholder={control.title.ru} />
				    </FormGroup>
					)
			case "drop_down_options":  
				return (
				    <FormGroup key={i}>
				    	<ControlLabel>{control.title.ru}</ControlLabel>
				    	<FormControl 
				    		componentClass="select" 
				    		name={control.feature_id} >
				    		{control.options.map((country) => {
				    			return <option value={country.feature_id}>{country.title.ru}</option>
				    		})}
				    	</FormControl>
				    </FormGroup>
					);
	    }
    })
  }

  render() {
    const { photoForm } = this.props;
    const controls = photoForm.controls;

    return (
    	<Clearfix>
	    	<FormGroup >
		    	{this.uploadImage(controls)}
		    </FormGroup>
			<Form action="/" id='js-top-block-form' onSubmit={this.onSubmit.bind(this)} inline method="POST">
				{this.controlsArray(controls)}
				<Button type="submit">
				  Сохранить
				</Button>
			</Form>
		</Clearfix>
	)
  }
}

export default TopBlock