
const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){
    const params = url.parse(process.env.DATABASE_URL);
    const auth = params.auth.split(':');
    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };
} else{
    // Initialise postgres client
    configs = {
        user: 'nuraqilahrajab',
        host: '127.0.0.1',
        database: 'vm',
        port: 5432
    };
}

const pool = new pg.Pool(configs);
pool.on('error', function (error) {
  console.log('idle client error', err0r.message, error.stack);
});

const cookieParser = require('cookie-parser');

const SALT = " ";

// Init express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(methodOverride('_method'));
// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);
var sha256 = require('js-sha256');


////////////FUNCTIONS
var testroute = (request, response) => {
  response.render('test');
};

var renderMainPage = (request, response)=> {
    let queryString = "SELECT * FROM events";
    pool.query(queryString, (error, result) => {

        if(error) {
            console.error('query error:', error.stack);
            response.send( 'query error' );
        }//if CT

        else {
                let data = {
                    events : result.rows,
                    cookies: request.cookies
                } //data CT
            response.render('mainpage', data);
        }// else CT
    }) //pool.query CT
}//renderMainPage CT

var renderRegisterForm = (request, response) => {
    response.render('register')
}; //renderRegisterFormCT

var postRegisterForm = (request, response) => {

    let queryString = 'SELECT * FROM users WHERE email = $1';
    let userInput = request.body;
    let userInputEmail = [userInput.email];

    pool.query(queryString, userInputEmail, (error,result) => {

        if (error) {
            console.log("query error", error.message);
        }// if CT
        else { //render the form

            if (result.rows.length>0) { //check for email first
                response.send('E-mail already exist in database');
            }//if2 CT

            else {
                let hashedPassword = sha256(userInput.password + SALT);
                let queryStringInput = 'INSERT INTO users (email, profile_picture, full_name, password, contact_number, experties, social_causes, occupation, personal_statement) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';

                const number = parseInt(request.body.contact_number);

                const values = [request.body.email, request.body.profile_picture, request.body.full_name, hashedPassword, number, request.body.experties, request.body.social_causes, request.body.occupation, request.body.personal_statement];

                pool.query(queryStringInput, values, (error, result) => {

                    if (error) {
                        console.log("query error", error.message);
                    } //if3 CT
                    else{
                        var user_id = result.rows[0].id;
                        let loggedInCookie = sha256(userInputEmail + 'logged_email' + SALT );

                        response.cookie('email', request.body.email);
                        response.cookie('loggedIn', loggedInCookie);
                        response.cookie('user_id', user_id);
                        response.redirect('/login');
                    }//else3 CT
                }) //pool.query CT
            }//else2 CT
        }//else CT
    })//pool.queryCT
}//postRegisterForm CT

var renderLoginForm = (request, response) => {
    response.render('login');
}//renderLoginForm CT

var postLoginForm = (request, response) => {
    let queryString = 'SELECT * FROM users where email=$1';
    const userInputEmail = [request.body.email];

    pool.query(queryString, userInputEmail, (error,result) => {

        if (error) {
            console.log("query error", error.message);
        }
        else {
            let hashedPassword = sha256( request.body.password + SALT );
            console.log(result.rows[0].password );
            console.log("hashedPassword " + hashedPassword);
            if (result.rows[0].password === hashedPassword){
            console.log(result.rows[0].password);

                var user_id = result.rows[0].user_id;
                let loggedInCookie = sha256( user_id + 'logged_id' + SALT );
                response.cookie('email', request.body.email);
                response.cookie('user_id', user_id);

                response.redirect('/profile');
            }
            else {
                response.send("Unable to login")
            }
        }
    })
};


var renderEventRegistrationForm = (request, response) => {
    let queryString = 'SELECT * FROM events WHERE event_id=$1';
    const id = [parseInt(request.params.event_id)];

    pool.query( queryString, id, (error, result) => {

        if (error) {
            console.log("query error", error.message);
        }
        else {
            const data = {
                eventId: result.rows[0].event_id
            }
            console.log(data);
            response.render('event-register', data);
        }
    })
} //renderEventRegistrationForm CT



var postEventRegistrationForm = (request, response) => {

            let userInput = parseInt(request.cookies.user_id);
            let eventInput = parseInt(request.params.event_id);
            console.log('x', userInput, eventInput);
            console.log(eventInput);
            let queryString = 'INSERT INTO eventsAttendance (user_id, event_id) VALUES ($1, $2) RETURNING *';
            console.log(queryString);
            const values = [userInput, eventInput];

            pool.query(queryString, values, (error, result) => {

                if (error) {
                        console.log("query error", error.message);
                    } //if2 CT
                    else{
                        console.log('aksjdhakjhdahd')
                        response.redirect('/event-register/email');
                    } //else2 CT
            })//pool.query CT

 } //postEventRegistrationForm


var renderProfilePage = (request, response) => {


    let user_id = parseInt(request.cookies.user_id);
    console.log(user_id);
    //const id = [parseInt(request.params.user_id)];
    let queryString = 'SELECT * FROM users WHERE user_id=$1';
    let values = [user_id];
    console.log(user_id);
    //let queryString2 = 'SELECT * FROM eventsAttendance WHERE user_id=$1';


    pool.query( queryString, values, (error, result) => {

        if (error) {
            console.log("query error 1", error.message);
        }//if1 CT
        else {
            let queryString2 = 'SELECT eventsAttendance.user_id,eventsAttendance.event_id,events.event_name, events.event_day, events.event_date, events.event_time, events.event_picture FROM eventsAttendance INNER JOIN events ON (eventsAttendance.event_id = events.event_id) WHERE eventsAttendance.user_id = $1';
            console.log(queryString2);

            pool.query( queryString2, values, (error, result2) => {
                // console.log(result2);
                // console.log(values);

            if (error) {
                console.log("query error 2", error.message);
            }
            else {
                let queryString3 = "SELECT * FROM events";
                pool.query(queryString3, (error, result3) => {

                    if(error) {
                        console.error('query error 3:', error.stack);
                        response.send( 'query error' );
                    }//if CT

                    else {

                        const data = {
                            profilepic: result.rows[0].profile_picture,
                            fullname: result.rows[0].full_name,
                            events: result2.rows,
                            eventsList : result3.rows,
                            cookies: request.cookies
                        }
                        console.log("events", data.eventslist)
                        response.render('profile', data);

                         }//else3 CT
                 });//querystring3 CT
            }//else2 CT
        })//querystring2 CT
    }//else1 CT
  })//queryString1 CT
}//renderct



var logout = (request, response) => {
    console.log("clicked log out");
        response.clearCookie('user_id');
        response.clearCookie('loggedin');
        response.redirect('/login');
}//logout CT


var renderEmail = (request, response) => {
    response.render('email');
} //renderEmail CT

var renderFailedReg = (request, response) => {
    response.render('failed');
} //renderFailedReg CT

////////////ROUTES
app.get('/test', testroute);
app.get('/register', renderRegisterForm);
app.post('/register', postRegisterForm);
app.get('/login', renderLoginForm);
app.post('/login', postLoginForm);
app.get('/home', renderMainPage);
app.get('/event-register/email', renderEmail);
app.get('/event-register/failed', renderFailedReg);
app.get('/event-register/:event_id', renderEventRegistrationForm);
app.post('/event-register/:event_id', postEventRegistrationForm);
app.get('/profile', renderProfilePage);
app.post('/logout', logout);
app.get('/logout', renderLoginForm);


const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));