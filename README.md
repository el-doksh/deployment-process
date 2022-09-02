# App Link

http://elasticbeanstalk-us-east-1-318797793607.s3-website-us-east-1.amazonaws.com/

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