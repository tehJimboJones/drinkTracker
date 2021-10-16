---------------------------------
-- FUNCTIONS
---------------------------------
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL
AS
$function$
BEGIN
    NEW.rec_upd_ts = NOW();
    RETURN NEW;
END;
$function$
;

---------------------------------
-- CREATE TABLES
---------------------------------
CREATE TABLE IF NOT EXISTS
    drink_unit
(
    id    SERIAL PRIMARY KEY,
    brand  VARCHAR(100),
    product VARCHAR(100),
    size_in_oz real,
    abv real,
    description    TEXT,
    rec_crt_ts     TIMESTAMP DEFAULT NOW(),
    rec_upd_ts     TIMESTAMP DEFAULT NOW(),
    rec_upd_by     INTEGER
);

CREATE TRIGGER set_drink_unit_timestamp
    BEFORE
        UPDATE
    ON
        drink_unit
    FOR EACH ROW
EXECUTE FUNCTION
    trigger_set_timestamp()
;

alter sequence dirnk_unit_id_seq restart with 1000;