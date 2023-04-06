// Not use

import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFtomError');
        console.log('error:', error);

        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.log('componenetDidCatch')
    }

    render() {
        if (this.state.hasError) {
            return <h1>404</h1>
        }

        return (
            <>
            {this.props.children}
            </>
        );
    }
}