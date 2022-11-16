INSERT INTO anabolics (id, name, pct, side_effects, type, estimated_length)
VALUES 
(12, 'Dianabol (20mg)', true, ARRAY['Appetite Increase', 'Insomnia', 'Headaches', 'Depression', 'Liver Damage', 'Acne', 'Cardiovascular complications'], 'oral', '6-10')


create table cycles (
    id serial primary key,
    name text,
    anabolics text[],
    start_date timestamp,
    end_date timestamp,
    length int,
    pct boolean,
    user int references users(id)
    created_at timestamp default now(),



);
)