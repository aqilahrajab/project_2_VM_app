
var React = require("react");

class EventRegistrationUser extends React.Component {
    render() {
console.log(this.props);
        let link = "/event-register/" + this.props.eventId;

        return (
            <html>

                <h1> EVENT REGISTRATION </h1>
                        <form action={link} method= "POST">
                        <input type = "Submit" name = "event-register" value = "REGISTER EVENT"/>
                        </form>
                        <a href="/register">Not a member? Sign up today!</a>
            </html>
        )
    }
}

module.exports = EventRegistrationUser;