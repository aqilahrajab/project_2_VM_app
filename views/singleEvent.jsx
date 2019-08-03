

var React = require("react");
var DefaultLayout = require('./layout');

class single_event extends React.Component {
    render() {

        console.log(this.props.events);

        let eventsCards = this.props.rows.map(events => {
            let mainPage = "/home";

            return (

                    <div className="eventsCards">
                          <img src={events.event_picture} className="card-img-top" alt="Event Image"/>
                          <div className="card-body">
                          <h5 className="card-title">{events.event_name}</h5>
                          <p className="card-text">
                          <p> Day: {events.event_day} </p>
                          <p> Date: {events.event_date} </p>
                          <p> Objective: {events.event_description}</p>
                          </p>

                          <a href="#" className="btn btn-primary">REGISTER</a>
                          </div>
                  </div>
            )
        });
    }
}


module.exports = single_event;