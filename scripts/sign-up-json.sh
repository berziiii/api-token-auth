#!/bin/bash

# curl --include --request POST http://localhost:3000/sign-up \
#   --header "Content-Type: application/json" \
#   --data '{
#     "credentials": {
#       "email": "an@example.email",
#       "password": "an example password",
#       "password_confirmation": "an example password"
#     }
#   }'

  curl "http://localhost:3000/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"${EMAIL}\",
      \"password\": \"${PASSWORD}\",
      \"password_confirmation\": \"${PASSWORD}\"
    }
  }"



# data output from curl doesn't have a trailing newline
echo
