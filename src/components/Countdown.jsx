import React from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import "./FormStyling.css";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div className='time-container'>
        {count !== 0 && (
          <Clock timeInSeconds={count} resetCount={this.resetCount} />
        )}
        <CountdownForm
          onSetCountdownTime={(val) =>
            this.state.count === 0 && this.setState({ count: val })
          }
        />
      </div>
    );
  }
}

export default Countdown;
