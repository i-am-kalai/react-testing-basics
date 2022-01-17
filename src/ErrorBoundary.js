import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error) {
        this.setState(() => ({
            hasError: true
        }))
    }

    render() {
        if (this.state.hasError) return <h1>Ooopss!!!</h1>
        return this.props.children
    }
}