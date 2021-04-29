CREATE TABLE "public"."locale" ("id" serial NOT NULL, "country_id" text NOT NULL, "locale" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));COMMENT ON TABLE "public".locale IS E'Locales';
