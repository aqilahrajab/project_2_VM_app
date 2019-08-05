

var React = require("react");

class Register extends React.Component {
    render() {
        return (
            <html>
            <head>
                <link rel="stylesheet" type="text/css" href="css/register.css"/>
            </head>
            <div className = "container">
            <div className = "row">

                <h1> Register </h1>
                    <form method="POST" action="/register">
                        <p><input type ="text" name="email" placeholder ="E-MAIL"/></p>
                        <p><input type ="type" name="profile_picture" placeholder ="PROFILE PICTURE LINK"/></p>
                        <p><input type ="text" name="full_name" placeholder ="FULL NAME"/></p>
                        <p><input type ="text" name="password" placeholder ="PASSWORD"/></p>
                        <p><input type ="text" name="contact_number" placeholder ="CONTACT NUMBER"/></p>
                        <p><input type ="text" name="experties" placeholder ="AREAS OF EXPERTIES"/></p>
                        <p><input type ="text" name="social_causes" placeholder ="SOCIAL CAUSES"/></p>
                        <p><input type ="text" name="occupation" placeholder ="OCCUPATION"/></p>
                        <p><input type ="text" name="personal_statement" placeholder ="PERSONAL STATEMENT"/></p>
                        <p>Share with us your aspirations or what would like to fight for?</p>
                        <p><button type = "Submit">REGISTER</button></p>
                    </form>
            </div>
            </div>
            </html>
        )
    }
}

module.exports = Register;