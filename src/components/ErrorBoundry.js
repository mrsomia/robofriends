import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>OH NO, SOMETHING ISN'T WORKING CORRECTLY!!!</h1>
    } else {
      return this.props.children
    }
  }
}

export default ErrorBoundry;