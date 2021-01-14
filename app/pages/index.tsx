import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../actions/action_clock';
import ClockComponent from '../components/clock';
import Counter from '../components/counter';
import { Clock } from '../types/store';

interface StateProps {
  clock: Clock
}

interface DispatchProps {
  startCounter: () => Promise<any>
}

type Props = StateProps & DispatchProps;

class Index extends PureComponent<Props> {

  readonly timer;

  static getInitialProps ({ reduxStore, req }) {
    const isServer = !!req
    reduxStore.dispatch(serverRenderClock(isServer))
    return { isServer }
  }

  componentDidMount () {
    this.props.startCounter()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    const {clock} = this.props;
    return (
      <div>
        <ClockComponent lastUpdate={clock.lastUpdate} light={clock.light} />
        <Counter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    startCounter: () => dispatch(startClock())
  }
    
}

const mapStateToProps = (state) => {
  const { clock } = state
  return { clock }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
