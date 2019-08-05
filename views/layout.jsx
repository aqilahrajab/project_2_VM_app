var React = require('react');

class VolunteerLayout extends React.Component {

    render() {

        var logoStyle = {
                height:'50px',
                width:'50px',
                padding: '10px'
            }


        return(
            <html>

            <head>
                <title> VOLUNTEER SITE </title>
                    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/css/login.css"/>
            </head>

            <body>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">


                        <span className = "logo"><img src="images/mlogo-1-black.png" alt="Company Logo" style={logoStyle}/>
                                </span>

                        <a className="navbar-brand" href="#">Navbar</a>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">

                            <ul className="navbar-nav">

                                <li className="nav-item active">
                                <a className="nav-link" href="#">REGISTER<span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link" href="#">UPCOMING EVENTS</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link" href="/profile">PROFILE</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link disabled" href="#">CONTACT US</a>
                                </li>

                            </ul>
                        </div>
                </nav>

                <div>
                    {this.props.children}
                </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            </body>
            </html>
        )
    }
}

module.exports = VolunteerLayout;