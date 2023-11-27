import React, { Component } from 'react';
import Eme1 from './ErrorPage';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Eme1 />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
