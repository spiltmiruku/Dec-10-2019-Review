CREATE TABLE users_new (
    user_id serial primary key,
    user_email varchar(100),
    user_password varchar(250)
    );

    CREATE TABLE IF NOT EXISTS post (
    post_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users_new(user_id),
    image_url VARCHAR(250)
);

INSERT INTO post (
    user_id,
    image_url
) VALUES (
    
);