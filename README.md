# App Link

http://elasticbeanstalk-us-east-1-318797793607.s3-website-us-east-1.amazonaws.com/

# Installation

    npm run frontend:install
    npm run frontend:start
    npm run frontend:build
    npm run frontend:test
    npm run frontend:e2e
    npm run frontend:lint
    npm run frontend:deploy
    npm run api:installno-fund
    npm run api:build
    npm run api:start
    npm run api:deploy
    npm run deploy

# Screenshots

all screen shots for rds, s3, eb and cirecle ci located in

./screenshots

# Infrastructure description

    udagram/udagram-frontend : frontend app created by angular
    udagram/udagram-api : backend apis created by node.js
# App dependencies

    node
    angular/cli
    aws/cli
    eb/cli
# Pipeline process

    1- node install
    2- aws-cli install
    3- eb install
    4- checkout
    5- Install Front-End Dependencies
    6- Install API Dependencies
    7- Front-End Lint
    8- Front-End Build
    9- API Build
    10 -App Deployment