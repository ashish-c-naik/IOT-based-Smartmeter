# IOT based smartmeter Web application

Phonegap used to bridge the web application and mobile device.


## Screenshots of app
![Bill amount](./ss1.png "Enter Bill amount to track" =250x250)
![Homepage](./ss2.png?raw=true "Homepage displaying weekly quota of Smart Appliances used" |  width=100)
![Daily usage](./ss3.png?raw=true "Displaying daily quota of Smart Appliances used" |  width=100)

## Usage

#### PhoneGap CLI

The hello-world template is the default when you create a new application using the [phonegap-cli][phonegap-cli-url].

    phonegap create my-app

Create an app using this template specifically:

    phonegap create my-app --template hello-world

To see a list of other available PhoneGap templates:

    phonegap template list

## How to install this repo
First, head over to <a href="https://nodejs.org/">nodejs.org</a> and install Node.js.<br />

Go ahead and clone the repository onto your disk. Clone it inside your newly created phonegap project.<br />

```sh
$ git clone https://github.com/spyashu/smartmeter.git && cd www
```

Install bower globally

```sh
$ npm install -g bower
```

Install necessary dependencies.

```sh
$ npm run install
```

## Usage of this repo
Go ahead and run the server as follows:

```sh
$ npm start
```

Your app must now be running on localhost.

[phonegap-cli-url]: http://github.com/phonegap/phonegap-cli
[cordova-app]: http://github.com/apache/cordova-app-hello-world
[bithound-img]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world/badges/score.svg
[bithound-url]: https://www.bithound.io/github/phonegap/phonegap-app-hello-world
[config-xml]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/config.xml
[index-html]: https://github.com/phonegap/phonegap-template-hello-world/blob/master/www/index.html
[cordova-whitelist-guide]: https://cordova.apache.org/docs/en/dev/guide/appdev/whitelist/index.html
[cordova-plugin-whitelist]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist
[cordova-plugin-whitelist-csp]: http://cordova.apache.org/docs/en/latest/reference/cordova-plugin-whitelist#content-security-policy
[csp-is-awesome]: http://cspisawesome.com
