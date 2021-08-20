import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';



class FilterForm extends Component {

  handleChange = (e) => {
    this.props.handleSelection(e.target.value);
  }

  render(){
    return(
      <Container className="w-90 p-4">
        <FloatingLabel controlId="floatingSelect" label="NUMBER OF HORNS">
          <Form.Select aria-label="Floating label select example" onChange={this.handleChange}>;
            <option>ANY</option>
            <option value="1">ONE</option>
            <option value="2">TWO</option>
            <option value="3">THREE</option>
            <option value="alot">ALOT</option>
          </Form.Select>
        </FloatingLabel>
      </Container>
    );
  }
}

export default FilterForm;
