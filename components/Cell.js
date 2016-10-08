'use strict';

const React = require('react');

class Cell extends React.Component {

    render () {

        const { cell, onChange, onFocus } = this.props

        return (
            <td className="cell">
                <input
                    type="text"
                    value={cell}
                    onChange={onChange}
                    onFocus={onFocus}
                />
            </td>
        )
    }
}

Cell.propTypes = {
    cell: React.PropTypes.string.isRequired
}

module.exports = Cell;
