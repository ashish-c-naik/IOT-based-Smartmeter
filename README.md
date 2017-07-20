# IOT based smartmeter Web application

Phonegap used to bridge the web application and mobile device. It uses IBM bluemix's IOT platform to run the simulation of the IOT device. Node-red was used to generate simulated smartmeter IOT device that send us data in form of JSON string which then was visualized by using phonegap and google charts. It was done as a part of hackathon held in SPIT college on Feb 15, 2017.


## Screenshots of app
<img src="./ss1.png?" width="250"> <img src="./ss2.png?" width="250"> <img src="./ss3.png?" width="250">

## Usage
### IBM BLUEMIX IOT PLATFORM
You can get started using the platform at: <a href="https://www.ibm.com/cloud-computing/bluemix/internet-of-things" >IOT</a>
Node-red used for simulation : <a href="https://console.bluemix.net/docs/services/IoT/nodereddevice_sample.html#creating-and-connecting-a-node-red-device-simulator">NODE-RED</a>

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

## Technologies
<a href="https://phonegap.com/">Phonegap</a>
<a href="https://www.ibm.com/cloud-computing/bluemix/internet-of-things">IBM</a>
<a href="https://console.bluemix.net/docs/services/IoT/nodereddevice_sample.html#creating-and-connecting-a-node-red-device-simulator">NODE-RED</a>
<a href="https://developers.google.com/chart/">Google charts</a>

