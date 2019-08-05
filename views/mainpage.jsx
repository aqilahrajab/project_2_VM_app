var React = require("react");
var DefaultLayout = require('./layout');

class main_page extends React.Component {
    render() {

            var imageStyle = {
                height:'300px',
                width:'300px',
            }

        console.log(this.props.events);

        let eventsCards = this.props.events.map(events => {
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
                <link rel="stylesheet" type="text/css" href="/css/mainpage.css"/>
                </head>
                <DefaultLayout>
                    <div>
                        <h1>UPCOMING EVENTS</h1>
                        <div className ='container'>
                        <div className= 'row'>
                        <div className= "EventCard-container">
                           {eventsCards}
                        </div>
                        </div>
                        </div>
                    </div>
                </DefaultLayout>
            </html>
        )
    }
}


module.exports = main_page;