import React from "react";

class Pin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inTime: true
    };
    this.onClick = this.onClick.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.pin.round && this.props.pin.target && this.state.inTime) {
      setTimeout(() => {
        console.log("setting time for pin to false", this.props.pin.pinNumber);
        this.setState({ inTime: false });
      }, this.props.timer);
    }
  }

  onClick(e) {
    console.log("this is the timer props", this.props.timer);
    if (this.state.inTime) {
      console.log("continue bowling");
      this.props.continueBowling(e);
      this.props.updatePin(e, true);
      setTimeout(() => {
        this.setState({ inTime: true });
      }, this.props.timer);
    } else {
      console.log("missed it, next round!");
      this.props.updatePin(e, false);
      this.setState({ inTime: true });
    }
  }

  render() {
    return (
      <div className="pin-container">
        {this.props.pin.round &&
          (this.props.pin.target ? (
            <div
              className="pin-target"
              id={this.props.pin.pinNumber}
              onClick={e => {
                this.onClick(e);
              }}
            />
          ) : (
            <div className="pin" id={this.props.pin.pinNumber} />
          ))}
      </div>
    );
  }
}

export default Pin;
