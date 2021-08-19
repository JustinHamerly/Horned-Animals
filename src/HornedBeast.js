import { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import heart from './assets/heart.png';

class HornedBeast extends Component {

  constructor(props) {
    super(props);
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
            <Accordion.Item eventKey={this.props.keyword}>
              <Accordion.Header>{this.props.title}</Accordion.Header>
              <Accordion.Body>
                <p>Horns: {this.props.horns}</p>
                <p><img class="heart" src={heart} alt="heart" /> {this.state.votes}</p>
                <button class="votebutton" onClick={this.handleVoteClick}>Vote For Me!</button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div class='articlebottom'>
          <img onClick={() => this.props.onImageClick({title: this.props.title, keyword: this.props.keyword, description: this.props.description, horns: this.props.horns, image_url: this.props.image_url})} src={this.props.image_url} alt={this.props.keyword}></img>
        </div>
      </article>
    );
  }
}

export default HornedBeast;
