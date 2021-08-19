import beasts from './data.json';
import HornedBeast from './HornedBeast';
import { Component } from 'react';


class Main extends Component {
  constructor() {
    super(constructor);
    this.newBeasts = beasts.slice();
    shuffle(this.newBeasts);
  }
  render(){
    const beastArray = this.newBeasts.map(beast => {
      return <HornedBeast onImageClick={this.props.renderOnClick} image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} key={beast.keyword} />;
    });

    return (
      <div id="beasts">
        {beastArray};
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
