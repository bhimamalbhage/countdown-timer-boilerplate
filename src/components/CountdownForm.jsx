import React from "react";
import "./FormStyling.css";
class CountdownForm extends React.Component {
  onSubmit(e) {
    //This will give you string for seconds. Do not remove refs
    e.preventDefault();
    var secondsStr = this.refs.seconds.value;
    const timeAdded = parseInt(secondsStr);
    if (secondsStr !== "" && timeAdded > 0)
      this.props.onSetCountdownTime(timeAdded);
  }

  render() {
    return (
      <div>
        <form
          ref='form'
          onSubmit={this.onSubmit.bind(this)}
          className='countdown-form form-body'
        >
          <input
            type='text'
            ref='seconds'
            placeholder='Enter time in seconds'
            className='enter-text'
          />
          <input
            type='submit'
            className='button success expanded timer-button'
            value='Start Countdown'
          />
        </form>
      </div>
    );
  }
}

export default CountdownForm;
