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

  handleChange = (e) => {
    console.log(e);
    const selection = e.target.value;
    if (selection === '1'){
      this.setState({beasts: shuffleBeasts.filter(beast => beast.horns === 1)});
    }else if (selection === '2'){
      this.setState({beasts: shuffleBeasts.filter(beast => beast.horns === 2)});
    }else if (selection === '3'){
      this.setState({beasts: shuffleBeasts.filter(beast => beast.horns === 3)});
    }else if (selection === 'alot'){
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
        <FilterForm handleChange={this.handleChange}/>
        <div id="beasts">
          {beastArray};
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
