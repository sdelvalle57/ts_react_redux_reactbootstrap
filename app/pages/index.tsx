import React, {PureComponent} from 'react'
import {connect} from 'react-redux'

import ClockComponent from '../components/clock';
import Counter from '../components/counter';
import { Clock, StoreState } from '../types/store';

import { renderClock, startClockInterval } from '../store/clock/actions';
import { getClock } from '../store/clock/selectors';



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
    reduxStore.dispatch(renderClock(isServer, Date.now()))
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
    startCounter: () => dispatch(startClockInterval())
  }
    
}

const mapStateToProps = (state: StoreState): StateProps => {
  return {
    clock: getClock(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
