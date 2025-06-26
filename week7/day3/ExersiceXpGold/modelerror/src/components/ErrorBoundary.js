import React,{Component} from "react";
import Modal from "./Modal"; 

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorInfo: null
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      errorInfo: error.message
    });
  }

  occurError = () => {
    this.setState({ hasError: true, errorInfo: "Manually triggered error!" });
  };

  handleClose = () => {
    this.setState({ hasError: false, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal
          message={this.state.errorInfo}
          onClose={this.handleClose}
        />
      );
    }

    return (
      <div>
        {this.props.children(this.occurError)}
      </div>
    );
  }
}
