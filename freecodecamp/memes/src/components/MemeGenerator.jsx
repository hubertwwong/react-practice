import React from 'react';

import Header from './Header';
import MemeForm from './MemeForm';
import Meme from './Meme';

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      loading: true,
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(res => {
        this.setState({
          allMemeImgs: res.data.memes
        })
      });
  }

  onSubmit(event) {
    // prevent form submission
    event.preventDefault();

    const memeImageNo = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randomImg = this.state.allMemeImgs[memeImageNo].url;
    this.setState({
      randomImg
    })
  }

  onChange(event) {

    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
    //console.log(name, value);
  }

  render() {
    return (
      <div>
        <Header />
        <MemeForm 
          data={this.state} 
          onChange={this.onChange} 
          onSubmit={this.onSubmit} />
        <Meme
          topText={this.state.topText} 
          bottomText={this.state.bottomText}
          randomImg={this.state.randomImg} />
      </div>
    )
  }
}

export default MemeGenerator;