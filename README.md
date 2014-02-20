# Kinvey JavaScript Library
> Bower package for Kinvey’s JavaScript Libraries for [AngularJS](http://angularjs.org/), [Backbone.js](http://backbonejs.org/), HTML5, [PhoneGap](http://phonegap.com/), and [Titanium](http://www.appcelerator.com/).

[Kinvey](http://www.kinvey.com) (pronounced Kin-vey, like convey) makes it ridiculously easy for you to setup, use, and operate a cloud backend for your (mobile) web app. You don’t have to worry about connecting to various cloud services, setting up servers for your backend, or maintaining and scaling them.

## How To Use

### 1. Sign Up for Kinvey
To use the library, sign up for Kinvey if you have not already done so. Go to the [sign up page](https://console.kinvey.com/) to create your first app. Write down your application credentials for later.

### 2. Add the library
In your app’s `bower.json`, include the library as a dependency:

```
{
    ...
    "dependencies": {
        "kinvey": "<version>"
    }
    ...
}
```

The package will be installed when updating your project:

```
bower update
```

Alternatively, you can install the package directly from the command line:

```
bower install kinvey
```

Finally, you can also clone the repository and create a symbolic link to the package:

```
git clone git@github.com:Kinvey/js-library.git
cd js-library
bower link
```

### 3. Configure the library
The package is now available for use in your project. Import the library in your code using (change `html5` to the platform you are using):

```html
<script src="/bower_components/kinvey/kinvey-html5.js"></script>
```

Next, initialize the library with your application credentials as obtained in step 1 above:

```javascript
Kinvey.init({
    appKey    : 'App Key',
    appSecret : 'App Secret'
});
```

### 4. Verify Set Up
You can use the following snippet to verify the app credentials were entered correctly. This function will contact the backend and verify that the library can communicate with your app.

```javascript
Kinvey.ping().then(function(response) {
    console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
}, function(error) {
    console.log('Kinvey Ping Failed. Response: ' + error.description);
});
```

## What’s next?
You are now ready to start building awesome apps! We recommend diving into the [User guide](http://devcenter.kinvey.com/guides/users) or [Data store guide](http://devcenter.kinvey.com/guides/datastore) to learn more about our service, or explore the [sample apps](http://devcenter.kinvey.com/samples) to go straight to working projects.

## License
    Copyright 2014 Kinvey, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.