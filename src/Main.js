import beasts from './data.json';
import HornedBeast from './HornedBeast';
import { Component } from 'react';
import FilterForm from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const shuffleBeasts = shuffle(beasts.slice());

class Main extends Component {

  constructor() {
    super();
    this.state = {
      beasts: shuffleBeasts,
    };
  }

  handleChange = (horns) => {
    if (horns === '1' || horns === '2' || horns === '3'){
      this.setState({beasts: shuffleBeasts.filter(beast => beast.horns === parseInt(horns))});
    }else if (horns === 'alot'){
      this.setState({beasts: shuffleBeasts.filter(beast => beast.horns >= 4)});
    }else{
      this.setState({beasts: shuffleBeasts});
    }
  }

  render(){
    const beastArray = this.state.beasts.map(beast => {
      return <HornedBeast onImageClick={this.props.onImageClick} image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} key={beast.keyword} />;
    });

    return (
      <>
        <FilterForm handleSelection={this.handleChange}/>
        <div id="beasts">
          {beastArray}
        </div>
      </>
    );
  }
}

function shuffle(array) {
  let m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
//Fisher Yates array shuffle algorithm.

export default Main;
