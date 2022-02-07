import { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBeat: new Date().getTime() + this.props.beatInterval,
      timeout: null,
    };
  }

  componentDidMount() {
    const nextBeat = new Date().getTime() + this.props.beatInterval;
    this.setState({
      timeout: setTimeout(this.beat, nextBeat - new Date().getTime()),
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeout);
  }

  beat = () => {
    const nextBeat = this.state.nextBeat + this.props.beatInterval;
    const nextTimeout = setTimeout(this.beat, nextBeat - new Date().getTime());
    this.setState({
      nextBeat: nextBeat,
      timeout: nextTimeout,
    });
    this.props.beatFunction();
  };

  render() {
    return <Fragment />;
  }
}

Metronome.propTypes = {
  beatInterval: PropTypes.number.isRequired,
  beatFunction: PropTypes.func.isRequired,
};
