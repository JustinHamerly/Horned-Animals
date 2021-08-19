import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import heart from './assets/heart.png';

class HornedBeast extends Component {

  constructor() {
    super(constructor);
    this.state = {
      'votes': 0,
    };
  }

  handleVoteClick = () => {
    const newVote = this.state.votes += 1;
    this.setState({
      votes: newVote,
    });
  }

  render(){
    return(
      <article class='beastarticle'>
        <div class="articletop">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>{this.props.title}</Accordion.Header>
              <Accordion.Body>
                <p>{this.props.description}</p>
                <p>Horns: {this.props.horns}</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <img onClick={this.props.onImageClick} src={this.props.image_url} alt={this.props.keyword}></img>
        </div>
        <div class='articlebottom'>
          <p><img class="heart" src={heart} alt="heart" /> {this.state.votes}</p>
          <button class="votebutton" onClick={this.handleVoteClick}>Vote For Me!</button>
        </div>
      </article>
    );
  }
}

export default HornedBeast;
