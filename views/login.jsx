var React = require("react");
var bootstrapMeta = require('./bootstrap');

class Login extends React.Component {
    render() {

               var logoStyle = {
                height:'150px',
                width:'150px',
            }


        return (
            <bootstrapMeta>
                <html>
                <head>
                <link rel="stylesheet" type="text/css" href="css/login.css"/>
                </head>

                    <div className="box">
                        <div className = "form-content">
                           <img src="images/mlogo-1.png" style={logoStyle} alt="Company Logo"/>
                            <form method="POST" action="/login">
                                <p><input type ="text" name="email" placeholder ="E-MAIL"/></p>
                                <p><input type ="text" name="password" placeholder ="PASSWORD" className='password'/></p>
                                <p><button type = "Submit">LOGIN</button></p>
                            </form>
                        </div>
                    </div>

                </html>
            </bootstrapMeta>
        )
    }
}



module.exports = Login;