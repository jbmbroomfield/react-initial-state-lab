import React from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    render() {
        const state = this.state,
            secondsLeft = state.secondsLeft
        return (
            <div>
                {secondsLeft <= 0 ? 'Boom!' : `${secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
    
}