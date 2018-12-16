import Clock from './Clock'
import c from './App.scss'

export default () => (
  <div className={c.app}>
    <Clock className={c.clock} />
  </div>
)