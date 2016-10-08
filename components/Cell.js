'use strict';

const React = require('react');

class Cell extends React.Component {

    render () {

        const { data } = this.props

        console.log(data)

        return (
            <td>{data}</td>
        )
    }
}

Cell.propTypes = {
    data: React.PropTypes.string.isRequired
}

module.exports = Cell;
