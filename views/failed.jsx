
var React = require("react");

class Failed extends React.Component {
    render() {
        return (
            <html>
                <h1> We are Sorry!</h1>
                    <form method="POST" action="/eventregister">
                        <p> Unable to register? Leave us your number we will contact you shortly </p>
                        <p><input type ="text" name="name" placeholder ="NAME"/></p>
                        <p><input type ="text" name="contact_number" placeholder ="CONTACT NUMBER"/></p>

                        <p> Tell us what is your problem? </p>
                        <input type="checkbox" name="failed_account_reg" value="failed_Account_registration"/> Failed to create account<br/>
                        <input type="checkbox" name="failed_event_reg" value="failed_Event_registration"/> Failed to register for event<br/>
                        <p><button type = "Submit">SUBMIT</button></p>
                    </form>
            </html>
        )
    }
}

module.exports = Failed;