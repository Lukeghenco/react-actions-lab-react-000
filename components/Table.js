'use strict';

const React = require('react');
const Row = require('./Row');

class Table extends React.Component {

    render () {

        const { table, onBlur, onChange, onFocus } = this.props

        return (
            <table className="table" onBlur={onBlur}>
                <tbody>
                    {
                        table.map((row, rowIndex) =>
                            <Row
                                key={rowIndex}
                                row={row}
                                onChange={onChange.bind(null, rowIndex)}
                                onFocus={onFocus.bind(null, rowIndex)}
                            />
                        )
                    }
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    table: React.PropTypes.array.isRequired,
    onBlur: React.PropTypes.func.isRequired,
    onFocus: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
}

module.exports = Table;
