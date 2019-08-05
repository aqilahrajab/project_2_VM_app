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

        console.log(this.props.events);

        let eventsList = this.props.events.map(events => {
            let profileUrl = "/profile/" + events.user_id;
            console.log(profileUrl);

                return(
                     <li>{events.event_name}</li>
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