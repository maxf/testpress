# testpress

## Installation

From a fresh ubuntu instance:

    sudo apt-get install git nodejs npm
    sudo ln -s /usr/bin/nodejs /usr/bin/node
    sudo npm install -g express-generator mocha

    git clone https://github.com/maxf/testpress.git
    cd testpress
    npm install
    DEBUG=testpress:* ./bin/www

Then go to http://localhost:3000/
