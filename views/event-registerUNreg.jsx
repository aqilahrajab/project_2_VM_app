
var React = require("react");

class Register extends React.Component {
    render() {
        return (
            <html>
                <h1> Register </h1>
                    <form method="POST" action="/register">
                        <p><input type ="text" name="email" placeholder ="E-MAIL"/></p>
                        <p><input type ="text" name="full_name" placeholder ="FULL NAME"/></p>
                        <p><input type ="text" name="contact_number" placeholder ="CONTACT NUMBER"/></p>
                        <p><button type = "Submit">EVENT REGISTER</button></p>
                    </form>
            </html>
        )
    }
}

module.exports = Register;