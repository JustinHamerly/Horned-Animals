import beasts from './data.json';
import HornedBeast from './HornedBeast';

function Main() {

  const beastArray = beasts.map(beast => {
    return <HornedBeast image_url={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} />;
  });
  console.log(beastArray);

  shuffle(beastArray);

  return (
    <div id="beasts">
      {beastArray}
    </div>
  );
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
