BEGIN;
drop table if exists users , lorem cascade;
CREATE TABLE users(
    id serial primary key,
    username varchar(255) not null unique,
    email varchar(255) not null unique,
    password varchar(255) not null
);
CREATE TABLE lorem(
    id serial primary key on DELETE CASCADE,
    content text not null,
    userId integer not null,
    foreign key (userId) references users (id) on DELETE CASCADE
);
COMMIT;