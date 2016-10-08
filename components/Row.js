'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {

    render () {

        const { rowInfo } = this.props

        return (
            <tr className="row">
                <Cell data={rowInfo.weather} />
                <Cell data={rowInfo.city} />
                <Cell data={rowInfo.country} />
            </tr>
        )
    }
}

Row.propTypes = {
    rowInfo: React.PropTypes.shape({
        weather: React.PropTypes.string.isRequired,
        city: React.PropTypes.string.isRequired,
        country: React.PropTypes.string.isRequired
    })
}

module.exports = Row;
