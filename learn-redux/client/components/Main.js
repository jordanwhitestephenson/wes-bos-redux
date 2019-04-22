import React from 'react'
import { Link } from 'react-router';

const Main = React.createClass({
    render() {
        return (
            <div>
                <Link to="/">
                    <h1>ReduxInstagram</h1>
                   {React.cloneElement(this.props.children, this.props)}
                </Link>
            </div>
        )
    }
})
export default Main