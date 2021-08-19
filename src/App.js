import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './selectedBeast';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      title: '',
      description: '',
      image_url: '',
      keyword: '',
    };
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  renderOnClickHandle = (beastData) => {
    this.setState({showModal: true});
    this.setState({description: beastData.description});
    this.setState({title: beastData.title});
    this.setState({image_url: beastData.image_url});
    this.setState({keyword: beastData.keyword});
    console.log(beastData);
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Main onImageClick={this.renderOnClickHandle} />
        <Footer />
        <SelectedBeast show={this.state.showModal} onClose={this.closeModal} title={this.state.title} description={this.state.description} image_url={this.state.image_url} keyword={this.state.keyword} />
      </div>
    );
  }
}

export default App;

