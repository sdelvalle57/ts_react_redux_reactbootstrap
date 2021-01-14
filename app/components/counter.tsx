import React, {Component} from 'react'
import { connect } from 'react-redux'

import { StoreState } from '../types/store';
import { decrementCount, incrementCount, resetCount } from '../store/counter/actions';
import { getCounterWithSelector } from '../store/counter/selectors';


interface StateProps {
  counter: number
}

interface DispatchProps {
  increment: () => Promise<any>,
  decrement: () => Promise<any>,
  reset: () => Promise<any>
}

type Props = StateProps & DispatchProps;

class CounterComponent extends Component<Props> {
 
  render () {
    const { counter } = this.props
    return (
      <div>
        <h1>Count: <span>{counter}</span></h1>
        <button onClick={()=>this.props.increment()}>+1</button>
        <button onClick={()=>this.props.decrement()}>-1</button>
        <button onClick={()=>this.props.reset()}>Reset</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any): DispatchProps => {
  return {
    increment: () => dispatch(incrementCount()),
    decrement: () => dispatch(decrementCount()),
    reset: () => dispatch(resetCount())
  }
}

const mapStateToProps = (state: StoreState): StateProps => {
  return {
    counter: getCounterWithSelector(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)
