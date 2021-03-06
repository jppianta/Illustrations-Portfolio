import React, { Component } from 'react';
import './App.css';
import { portolio } from './portfolio';
import me from './assets/me.jpg'
import love from './assets/LoveSquare.png'
import { Card } from 'antd';
import Modal from 'antd/lib/modal/Modal';

const { Meta } = Card;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null,
      menuOption: 'Portfolio',
      modalVisible: false
    }
  }

  selectImg = (event) => {
    const element = event.target;

    const img = this.getImgElement(element).src;

    const selected = portolio.find(image => {
      const splittedPath = image.src.split('/');
      const imageName = splittedPath[splittedPath.length - 1];
      return img.endsWith(imageName);
    })

    this.setState({ selected, visible: true });
  }

  getImgElement(element) {
    while (!element.classList.contains('ant-card')) {
      element = element.parentElement;
    }

    return element.getElementsByClassName('cardImg')[0];
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  onMenuSelect = (event) => {
    const option = event.target.innerHTML;

    this.setState({ menuOption: option })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <img className="logoImg" src={me} alt="Joao Pedro Pianta" />
          <h1>João Pedro Pianta</h1>
          <div className="menu">
            <div className="optionContainer">
              <span className={`menuOption ${this.state.menuOption === 'Portfolio' ? 'selectedOption' : ''}`} onClick={this.onMenuSelect}>
                Portfolio
              </span>
            </div>
            <hr className="separator"></hr>
            <div className="optionContainer">
              <span className={`menuOption ${this.state.menuOption === 'About' ? 'selectedOption' : ''}`} onClick={this.onMenuSelect}>
                About
              </span>
            </div>
          </div>
        </div>
        {
          this.state.menuOption === 'Portfolio' ?
            <div className="tabContent">
              <div className="portfolio">
                {
                  portolio.map(image =>
                    <Card
                      key={image.title}
                      hoverable
                      cover={<img className="cardImg" alt={image.title} src={image.src} />}
                      onClick={this.selectImg}
                    >
                      <Meta title={image.title} />
                    </Card>
                  )

                }
              </div>
            </div> :
            <div className="tabContent">
              <div className="about">
                Hi, my name is João Pedro Pianta. I am a brazillian Software Engineer who loves art. I started creating some illustrations just for fun,
                but since I am a good frontend engineer, why not combine the two skills and create this beautiful portfolio, right?
            </div>
            </div>
        }
        <Modal
          title={this.state.selected && this.state.selected.title}
          width={800}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
        >
          {this.state.selected ? <img className="modalImg" alt={this.state.selected.title} src={this.state.selected.src} /> : null}
        </Modal>
        <div className="footer">
          <span>Made with</span>
          <img src={love} alt="Love" className="loveSmall" />
          <span>by myself</span>
        </div>
      </div>
    );
  }
}

export default App;
