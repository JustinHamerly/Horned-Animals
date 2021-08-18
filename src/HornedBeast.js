import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';

class HornedBeast extends Component {

  constructor() {
    super(constructor);
    this.state = {
      'votes': 0
    };
  }

  handleClick = () => {
    const newVote = this.state.votes += 1;
    this.setState({
      votes: newVote
    });
  }

  render(){
    return(
      <article class='beastarticle'>
        <div class='articleimg'>
          <img src={this.props.image_url} alt={this.props.keyword}></img>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{this.props.title}</Accordion.Header>
              <Accordion.Body>
                <p>{this.props.description}</p>
                <p>Horns: {this.props.horns}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div class='votesection'>
          <button class="votebutton" onClick={this.handleClick}>Vote For Me!</button>
          <p><img class="heart" src="https://i.ibb.co/St4DL3r/heart.png" alt="heart" /> {this.state.votes}</p>
        </div>

      </article>
    );
  }
}

export default HornedBeast;
