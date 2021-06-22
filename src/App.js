import React from 'react';
import MinimizableWebChat from './MinimizableWebChat';

//import IFrameFromDialog from './iframeContainer'

import MoIATBG from './MoIAT.png';
//import DubaiChamberBg2 from './dubai-chamber-bg-2.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    //this.handleFormDialogOpen = this.handleFormDialogOpen.bind(this)
    //#ec6b05 orange color
    //#0b3b5d blue color

    this.state = {
      //isFormDialogOpen: false,
      //iFrameURL: null /* "https://www.youtube.com/embed/8WkuChVeL0s" */
    }
  }

  /* componentDidMount() {
    console.log('componentDidMount')
  } */

  /* componentDidUpdate(prevProps, prevState) {
  }
 */

  /* handleFormDialogClose = () => {
    this.setState({
      isFormDialogOpen: false,
      iFrameURL: null
    })
  };

  handleFormDialogOpen = (url) => {
    this.setState({
      isFormDialogOpen: true,
      iFrameURL: url
    })
  }; */

  render() {
    /* console.log('this.state.----------------------')
    console.log(this.state.isFormDialogOpen)
    console.log(this.state.iFrameURL)
    console.log('---------------------------------') */
    return (
      <div className="App">
        {/* <IFrameFromDialog
          isFormDialogOpen={this.state.isFormDialogOpen}
          iFrameURL={this.state.iFrameURL}
          handleFormDialogClose={this.handleFormDialogClose}
        /> */}
        <iframe
          //allow="camera *;microphone *"
          src={"http://ubibot.ubilityai.com/moiat-iframe/"}
          title={'Support Team'}
          height='90%'
          width="400px"
          style={{ position: 'fixed', zIndex: '2000' }}
        >
        </iframe>
        <img className="bg" alt="product background" src={MoIATBG} />
        <MinimizableWebChat /* handleFormDialogOpen={this.handleFormDialogOpen} */ />
      </div>
    )
  }
}

export default App;
