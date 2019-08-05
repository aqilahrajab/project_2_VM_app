
var React = require('react');

class VolunteerLayout extends React.Component {

    render() {
        return(
            <html>

            <head>
                <title> VOLUNTEER SITE </title>
                    <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"/>
                    <link rel="stylesheet" type="text/css" href="/css/style.css"/>
            </head>

            <body>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                                <a className="nav-link" href="#">PROFILE</a>
                                </li>

                                <li className="nav-item">
                                <a className="nav-link disabled" href="#">CONTACT US</a>
                                </li>

                            </ul>
                        </div>
                </nav>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            </body>
            </html>
        )
    }
}

module.exports = VolunteerLayout;


var React = require("react");
var DefaultLayout = require('./layout');

class main_page extends React.Component {
    render() {

            var imageStyle = {
                height:'200px',
                width:'200px',
            }

            var logoStyle = {
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

<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>





    return (<Layout>
        <div class="mainAlbum-container">

                {allAlbums}

        </div>

{/*            <div class="card-group">
                {allArtist}
            </div>*/}
    </Layout>);
  }
}


.mainAlbum-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 20px;

}



var React = require("react");
var DefaultLayout = require('./layout');

class Register extends React.Component {
    render() {



        return (
            <html>
                <head>
                <link rel="stylesheet" type="text/css" href="/css/profile.css"/>
                </head>
                 <DefaultLayout>

                    <div className = "container-fluid">
                        <div className="row">
                          <div className="col-sm-8">
                            <img src= "/images/aqilah.jpg"/>


                          </div>
                          <div className="col-sm-4">

                          </div>
                          <div className="test">
                          <img src= {this.props.profilepic}/>
                          <img src= '/images/aqilah.jpg'/>

                          </div>
                        </div>
                    </div>

                 </DefaultLayout>

            </html>
        )
    }
}

module.exports = Register;

SELECT eventsAttendance.user_id,eventsAttendance.event_id,events.event_name FROM eventsAttendance INNER JOIN events ON (eventsAttendance.event_id = events.event_id) WHERE eventsAttendance.user_id = 9                                                                                                                                                              ;