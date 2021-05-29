import React from 'react'

export default class ImageSlider extends React.Component {

    state = {
        currentSlideIndex: 0
    }

    render() {
        const state = this.state
        return (
            <div>
                I am on slide {state.currentSlideIndex}
            </div>
        )
    }
}