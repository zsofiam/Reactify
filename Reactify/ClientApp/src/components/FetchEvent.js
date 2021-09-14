import React, { Component } from 'react';

export class FetchEvent extends Component {
    static displayName = FetchEvent.name;

    constructor(props) {
        super(props);
        this.state = { events: [], loading: true };
    }

    componentDidMount() {
        this.populateEventData();
    }

    static renderEventsTable(events) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Band</th>
                        <th>Date</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event =>
                        <tr key={event.id}>
                            <td>{event.title}</td>
                            <td>{event.band}</td>
                            <td>{event.date}</td>
                            <td>{event.venue}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchEvent.renderEventsTable(this.state.events);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async populateEventData() {
        const response = await fetch('event');
        const data = await response.json();
        this.setState({ events: data, loading: false });
    }
}
