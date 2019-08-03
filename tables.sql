
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
 		email TEXT,
 		profile_picture TEXT,
 		full_name TEXT,
 		password TEXT,
 		contact_number INTEGER,
 		experties TEXT,
 		social_causes TEXT,
 		occupation TEXT,
 		personal_statement TEXT
);

CREATE TABLE IF NOT EXISTS events (
    event_id SERIAL PRIMARY KEY,
    event_name TEXT,
    event_picture TEXT,
    event_day TEXT,
    event_date TEXT,
    event_time TEXT,
    event_description TEXT,
    event_venue TEXT,
    event_reflections TEXT,
    active BOOLEAN
);

CREATE TABLE IF NOT EXISTS eventsAttendance (
    id SERIAL PRIMARY KEY,
    user_id INT,
    event_id INT,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (event_id) REFERENCES events (event_id)
);

CREATE TABLE IF NOT EXISTS Queries (
	Queries_id SERIAL PRIMARY KEY,
	name TEXT,
	contact_number INTEGER,
	Query TEXT,
	Contacted BOOLEAN DEFAULT false
);