import beasts from './data.json';
import HornedBeast from './HornedBeast';
import { Component } from 'react';
import SelectedBeast from './selectedBeast';

class Main extends Component {

  render(){
    const beastArray = beasts.map(beast => {
      return <HornedBeast onImgClick={this.props.renderOnClick} image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} />;
    });

    shuffle(beastArray);

    return (
      <div id="beasts">
        {beastArray};
        <SelectedBeast />;
      </div>
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
