import { Component } from 'react'
import { DateTime } from 'luxon'

export default class Clock extends Component {
  state = {
    time: DateTime.local()
  }

  componentWillMount() {
    this.ticker = setInterval(() => {
      this.setState({
        time: DateTime.local()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.ticker)
  }

  render = () => (
    <div>{this.state.time.toLocaleString(DateTime.TIME_SIMPLE)}</div>
  )
}