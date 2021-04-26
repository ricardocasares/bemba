CREATE TABLE "public"."country" ("id" text NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"), UNIQUE ("name"));COMMENT ON TABLE "public".country IS E'Countries';
