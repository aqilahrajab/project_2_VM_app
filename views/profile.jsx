var React = require("react");
var DefaultLayout = require('./layout');

class Profile extends React.Component {
    render() {

            var logoStyle = {
                height:'50px',
                width:'50px',
                padding: '10px'
            }

            var imageStyle = {
                height: '200px',
                width: '200px'
            }

        // console.log(this.props.events);

        let eventsList = this.props.events.map(events => {
            let profileUrl = "/profile/" + events.user_id;
            // console.log(profileUrl);

                return(
                     <li className="eventnameline">{events.event_name} |  {events.event_date} | {events.event_time}</li>
                )
        })

        let eventsCards = this.props.eventsList.map(events => {
            let registerUrl = "/event-register/" + events.event_id;

                return(


                    <div className = "event">
                    <div className = "row">

                        <div className = "col-5">

                                <img src = {events.event_picture} alt= "Event Picture" style={imageStyle}/>
                        </div>

                        <div className = "col-6">

                            <p className = "caption2">{events.event_name}</p>
                            <p className = "caption">{events.event_day}  |  {events.event_date}  |  {events.event_time}</p>
                            <p className = "caption">{events.event_description}</p>
                            <a href={registerUrl} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" id={events.event_id}>REGISTER</a>

                        </div>


                    </div>
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

                              <div className= "position-fixed">
                              <div className="col-sm-12 d-flex flex-column" >
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
                    </div>

                 </DefaultLayout>

            </html>
        )
    }
}

module.exports = Profile;