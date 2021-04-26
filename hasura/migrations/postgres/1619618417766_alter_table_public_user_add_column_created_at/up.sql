alter table "public"."user" add column "created_at" timestamptz
 null default now();
