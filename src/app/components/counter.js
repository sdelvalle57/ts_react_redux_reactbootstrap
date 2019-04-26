import React, {Component} from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../actions/action_counter';

class Counter extends Component {
 
  render () {
    const { counter } = this.props
    return (
      <div>
        <h1>Count: <span>{counter.count}</span></h1>
        <button onClick={()=>this.props.increment()}>+1</button>
        <button onClick={()=>this.props.decrement()}>-1</button>
        <button onClick={()=>this.props.reset()}>Reset</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementCount()),
    decrement: () => dispatch(decrementCount()),
    reset: () => dispatch(resetCount())
  }
}

function mapStateToProps (state) {
  const {counter} = state
  return {counter}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
