var React = require("react");
var DefaultLayout = require('./meta');

class Register extends React.Component {
    render() {

            var logoStyle = {
                height:'50px',
                width:'50px',
                padding: '10px'
            }

            var imageStyle = {
                height: '230px',
                width: '230px'
            }

        // console.log(this.props.events);

        let eventsList = this.props.events.map(events => {
            let profileUrl = "/profile/" + events.user_id;
            // console.log(profileUrl);

                return(
                     <li>{events.event_name}</li>
                )
        })

        let eventsCards = this.props.eventsList.map(events => {
            let registerUrl = "/event-register/" + events.event_id;

                return(

                    <div className = "col-4">

                            <img src = {events.event_picture} alt= "Event Picture" style={imageStyle}/>
                            <p className = "caption">{events.event_name}</p>
                            <p className = "caption">{events.event_day}</p>
                            <p className = "caption">{events.event_date}</p>
                            <p className = "caption">{events.event_time}</p>
                            <p className = "caption">{events.event_description}</p>
                            <a href={registerUrl} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" id={events.event_id}>REGISTER</a>
                    </div>
                )
        })



        return (
            <html>
                <head>
                <link rel="stylesheet" type="text/css" href="/css/profile.css"/>
                </head>

                 <DefaultLayout>

                    <div className = "container-fluid d-flex flex-column">
                        <div className="row">
                          <div className="col-sm-8">

                          {eventsCards}

                          </div>
                          <div className="col-sm-4 d-flex flex-column">
                            <img src= {this.props.profilepic} style={imageStyle} className = 'center'/>
                            <p id="profile"> {this.props.fullname} </p>
                            <p id="eventHeader">REGISTERED EVENTS</p>
                             <div className= "registeredEvents">
                                <ul>
                                    {eventsList}
                                </ul>
                             </div>

                          </div>

                        </div>
                    </div>

                 </DefaultLayout>

            </html>
        )
    }
}

module.exports = Register;