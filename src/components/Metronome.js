import { Component } from "react";

export default class Metronome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextBeat: new Date().getTime() + this.props.beatInterval,
      timeout: null,
    };
  }
}
