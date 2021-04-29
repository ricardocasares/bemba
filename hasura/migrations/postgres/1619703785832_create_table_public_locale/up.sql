CREATE TABLE "public"."locale" ("id" text NOT NULL, "country_id" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public".locale IS E'Locales';
