'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {

    render () {

        const { rows } = this.props
        const renderRows = rows.map((rowInfo, index) =>
            <Row key={index} rowInfo={rowInfo} />
        )

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Weather</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows}
                </tbody>
            </table>
        )
    }
}

module.exports = Table;
