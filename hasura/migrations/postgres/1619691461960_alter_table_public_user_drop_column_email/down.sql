alter table "public"."user" add constraint "user_id_email_key" unique (id, email);
alter table "public"."user" alter column "email" drop not null;
alter table "public"."user" add column "email" text;
