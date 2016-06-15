import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myVal: 1

    };
    this.incMyVal = this.incMyVal.bind(this);
  }

  incMyVal() {
    this.setState({
      myVal: this.state.myVal *= this.state.multiplier
    });
  }

  componentWillMount() {
    this.setState({
      multiplier: this.props.multiplier
    })
  }

  render() {
    let myVal = this.state.myVal;
    let incMyVal = this.incMyVal;
    return (
      <button onClick={incMyVal}>{myVal}</button>
    )
  }
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       val: 0
//     }
//     this.update = this.update.bind(this);
//   }

//   update() {
//     this.setState({
//       val: this.state.val + 1
//     });
//   }

//   componentWillMount() { // only called once, no access to DOM, access allowed to State
//     console.log('mounting')
//   }

//   componentDidMount() { // again, only called once, access DOM and State
//     console.log('mounted')
//   }

//   componentWillUnmount() {
//     console.log('bye')
//   }

//   render() {
//     console.log('rendering App component');
//     return <button onClick={this.update}>{this.state.val}</button>
//   }
// };

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       myInput: 'Default text value',
//       mySecondInput: 'Second default text value'
//     }
//     this.updateMyInputState = this.updateMyInputState.bind(this);
//   }

//   updateMyInputState(e) {
//     this.setState({ 
//       myInput: ReactDOM.findDOMNode(this.refs.myInput.refs.inp).value || this.state.myInput,
//       mySecondInput: ReactDOM.findDOMNode(this.refs.mySecondInput.refs.inp).value || this.state.mySecondInput
//     });
//   }

//   render() {
//     let myInput = this.state.myInput;
//     let mySecondInput = this.state.mySecondInput;
//     let update = this.updateMyInputState;
//     return (
//       <div>
//         <Widget ref="myInput" myInput={myInput} update={update} />
//         <Widget ref="mySecondInput" myInput={mySecondInput} update={update} />
//       </div>
//     )
//   }
// }

// class Widget extends React.Component {
//   render() {
//     return (
//       <div>
//         <input ref="inp" type="text" onChange={this.props.update} />
//         <h3>Value of myInput = {this.props.myInput}</h3>
//       </div>
//     )
//   }
// }

// export default App;


// import React from 'react';

// // component that can have state / can only return one element in JSK
// // wrapping something in a div overcomes issues with only one HTML node
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       txt: 'This is the state Text'
//     }
//     this.update = this.update.bind(this)
//   }
  
//   update(e) {
//     this.setState({ txt: e.target.value })
//   }

//   render() {
//     let txt = this.props.txt;
//     let stateTxt = this.state.txt;

//     return (
//       <div> 
//         <h1>Hello</h1>
//         <p>{txt}</p>
//         <p>{this.props.some}</p>
//         <input type="text" onChange={this.update} />
//         <p>{stateTxt}</p>
//       </div>
//     )
//   }
// };

// // define types
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// };

// // define prop defaults
// App.defaultProps = {
//   some: 15
// };

// // a parent component is referred to as a 'composite' component
// class AppParent extends React.Component {
//   render() {
//     <App txt={this.props.txt} cat={this.props.cat} />
//   }
// }

// // stateless function component
// // const App = () => <h1>Awesome</h1>

// export default App;