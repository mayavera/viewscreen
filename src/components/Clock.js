import { Component } from 'react'
import { DateTime } from 'luxon'
import classnames from 'classnames'
import c from './Clock.scss'

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
    <div {...this.props} className={classnames(c.clock, this.props.className)}>
      {this.state.time.toLocaleString(DateTime.TIME_SIMPLE)}
    </div>
  )
}