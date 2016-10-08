'use strict';

const React = require('react');
const Cell = require('./Cell');

class Row extends React.Component {

    render () {

        const { row, onBlur, onChange, onFocus } = this.props

        const cells = row.map((cell, columnIndex) =>
            <Cell
                key={columnIndex}
                cell={cell}
                onChange={onChange.bind(null, columnIndex)}
                onFocus={onFocus.bind(null, columnIndex)}
            />
        )

        return (
            <tr className="row">
                {cells}
            </tr>
        )
    }
}

Row.propTypes = {
    row: React.PropTypes.array,
    onFocus: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
}

module.exports = Row;
