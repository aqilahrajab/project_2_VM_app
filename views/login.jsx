var React = require("react");

class Login extends React.Component {
    render() {
        return (
            <html>
                <h1> LOGIN </h1>
                    <form method="POST" action="/login">
                        <p><input type ="text" name="email" placeholder ="E-MAIL"/></p>
                        <p><input type ="text" name="password" placeholder ="PASSWORD"/></p>
                        <p><button type = "Submit">LOGIN</button></p>
                    </form>
            </html>
        )
    }
}



module.exports = Login;