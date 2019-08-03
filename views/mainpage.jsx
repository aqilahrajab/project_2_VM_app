
var React = require("react");
var DefaultLayout = require('./layout');

class main_page extends React.Component {
    render() {

            var imageStyle = {
                height:'200px',
                width:'200px',
            }

            var logoStyle = {
                height:'200px',
                width:'200px',
            }

        console.log(this.props.events);

        let eventsCards = this.props.events.map(events => {
            let registerUrl = "/event-register/" + events.event_id;

                return(

                    <div className = "col-4">

                            <img src = {events.event_picture} alt= "Event Picture" style={imageStyle}/>
                            <p className = "caption">{events.event_name}</p>
                            <a href={registerUrl} className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" id={events.event_id}>REGISTER</a>
                    </div>
                )
        })

        return (
            <DefaultLayout>
                <div>
                    <div>
                        <img src="images/mlogo-1-black.png" alt="Company Logo" style={logoStyle}/>
                        <p> To create a community where every youth can change the world </p>
                    </div>


                    <h1>UPCOMING EVENTS</h1>

                    <div className="row">
                        {eventsCards}
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}


module.exports = main_page;