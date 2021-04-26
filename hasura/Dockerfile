FROM hasura/graphql-engine:v2.0.0-alpha.9.cli-migrations-v3
# Heroku hobby tier PG has few limitations including 20 max connections
# https://devcenter.heroku.com/articles/heroku-postgres-plans#hobby-tier
ENV HASURA_GRAPHQL_PG_CONNECTIONS=15

# Add migrations
COPY ./metadata /hasura-metadata
COPY ./migrations /hasura-migrations

# Workaround for cli-migrations on Heroku to pickup the environment variable
ENTRYPOINT []
CMD export HASURA_GRAPHQL_DATABASE_URL=$DATABASE_URL && docker-entrypoint.sh && graphql-engine \
    --database-url $HASURA_GRAPHQL_DATABASE_URL \
    serve \
    --server-port $PORT