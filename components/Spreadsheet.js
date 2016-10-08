'use strict';

const React = require('react');
const actions = require('../actions');
const Table = require('./Table');

class Spreadsheet extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            rows: [
                {
                    weather: '',
                    city: '',
                    country: ''
                }
            ]
        };

    }

    render () {

        const { rows } = this.state

        return (
            <div className='spreadsheet'>
                <h1>My little spreadsheet</h1>

                <div className='spreadsheet__buttons'>
                    <button>Add Column</button>
                    {' '}
                    <button>Add Row</button>
                    {' '}
                    <button>Remove Column</button>
                    {' '}
                    <button>Remove Row</button>
                </div>

                <Table rows={rows} />

                <div className='spreadsheet__focused'>
                </div>
            </div>
        );
    }
}

module.exports = Spreadsheet;
