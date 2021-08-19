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
    };
  }

  closeModal = () => {
    this.setState({showModal: false});
  }

  renderOnClickHandle = () => {
    this.setState({showModal: true});
    // this.props.passBeastInfo({this.props.title}, {this.props.description}, {this.props.image_url}, {this.props.keyword});
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Main renderOnClick={this.renderOnClickHandle} />
        <Footer />
        <SelectedBeast show={this.state.showModal} onClose={this.closeModal} />
      </div>
    );
  }
}

export default App;

