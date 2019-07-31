
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

-- CREATE TABLE IF NOT EXISTS course (
--     course_id SERIAL PRIMARY KEY,
--     course_name TEXT,
--     course_picture TEXT,
--     course_day TEXT,
--     course_date TEXT,
--     course_description TEXT,
--     course_venue
-- );

CREATE TABLE IF NOT EXISTS events (
    event_id SERIAL PRIMARY KEY,
    event_name TEXT,
    event_picture TEXT,
    event_day TEXT,
    event_date TEXT,
    event_time TEXT,
    event_description TEXT,
    event_venue TEXT,
    event_reflections TEXT
);