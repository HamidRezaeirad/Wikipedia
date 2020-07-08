# Implementation

This web site has been created with [React JS](https://reactjs.org/) in order to fetch Albert Einstein or any other available information
from [Wikipedia API](https://en.wikipedia.org/w/api.php) and displays  
in any realistic device in any network.

1. **Wikipedia API**
   <br>
   The Wikipedia API is a web service that allows you to access certain wiki features, such as fetch information.According to fetch Albert Einstein from
   Wikipedia I need to call this API. In order to get data in multiple languages, I need to use a partial subdomain and pass appropriate parameters.


     **Wikipedia API base URL:**

          https://en.wikipedia.org/w/api.php	English Wikipedia API
          https://nl.wikipedia.org/w/api.php	Dutch Wikipedia API


**Some Parameters needed to fetch data from the Wikipedia API.**  
  
 action query Get
origin \* Cors
format JSON JSON type
format version 2 New JSON response format.
prop pageimages|pageterms properties; what property or properties wold you want to receive
prop thumbnail What type of image would you receive Original or thumbnail
titles Albert Einstein Search keyword based on the title
pithumbsize 400 Thumbnail image size

These parameters help to receive the specific data needed to be displayed on the page. Pithumbsize is a useful parameter for capturing a
thumbnail image with costume width and small size. It's a powerful Wikipedia API feature that allows developers to get a proper costume image and
create a nice and faster web page.

2. **Axios**
   <br>
   Axios is promise-based, easy to use, and we can take advantage of async and await. We can also intercept and cancel requests and have built-in
   client-side protection against cross-site forgery requests. To get the data from the Wikipedia API, I use Axios, which is one of the best HTTP
   clients for the browser and Node.js.

3. **i18next**
   <br/>
   Provide standard i18n features such as (plurals, context, interpolation, format). It provides us with a complete solution to locate our product, such as web, mobile, and desktop. This framework helps us to enable the website to be multi-language, and it automatically detects the default language base of the browser setting and helps developers to set user's preferred language and display the content in that locale on the first load.

4) **Bootstrap**
   <br>
   It is useful to make the website responsive and to be able to open the web page from any realistic device. The bootstrap grid system helps me create a
   flexible web page on any device.

- **Problems**
  <br/> 1. Cross-origin resource sharing (core) issue while fetching data from the Wikipedia API.  
   2. Reasonable size and width of the image to be displayed on the web page. The original image is so big and the thumbnail is so small.<br> 3. Changing the Wikipedia API sub-domain to get information in perpetual language.
- **Solutions**
  <br/> 1. The Wikipedia API provides a parameter to fix the CORS issue. The origin parameter helps us in this case. For example origin=\*. <br> 2. Thumb Size parameter lets the developer receive a stable image width and small size by passing width value e.g. Pithumbsize=400. <br> 3. Using the Axios Interceptor to change the subdomain in baseURL, based on the selected language before sending requests.

## Clone

Use the [Git](https://git-scm.com/downloads) to clone the project in a local machine.

```bash
git init
git clone https://github.com/HamidRezaeirad/Wikipedia.git
cd Wikipedia
```

## Installation

Use the package manager [npm](https://docs.npmjs.com/cli/install) to install project.

```bash
npm install
npm strat

```

Use the package manager [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to install the project.

```bash
yarn install
yarn start

```

## Accessibly

Web application will be run in local machin on post 3000.
<br/>
[http://localhost:3000/](http://localhost:3000/)

Also, the application has been deployed on AWS Amplify and is accessible with below link:
<br/>
[https://master.d1xd8to6aicror.amplifyapp.com/](https://master.d1xd8to6aicror.amplifyapp.com/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
