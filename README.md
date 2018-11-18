# Survey App

## Live Web App deployed @

```
https://pedantic-bardeen-88016b.netlify.com
```

## The API

A simple express server has been used to retrieve the initial endpoint.
Subsequent details json objects for specific surveys have been served up as express static paths.

## The client

Framework used - Angular 7

### Code decisions

Even though this app is not a very big one, in order to improve the performance marginally I decided to lazy-load the details module.

An improvement could be to use NGRX to save state to boost performance during route re-navigation.

The client is heavily unit tested and includes a comprehensive coverage. I have also included some e2e tests(Of course I could have gone to town on this, but chose to keep it to minimum as there is already good unit test coverage).

### Challenges faced

I faced a bit of a challenge when I had to load a dynamic route for the lazy loaded module, and of course a little bit while calculating the average score(a bit of inception).

There were many approaches I could have taken to load the details route, but this implementation can accommodate changes to the API if it were to serve up more themes etc hence making a bit dynamic.

### Setting up locally

1. Clone the bundle file.
2. cd server -> nvm use -> npm i
3. cd to root -> cd client-survey-app -> nvm use -> npm i
4. npm start to run dev environment
5. npm run test:unit or npm run test:watch for unit tests
6. npm run test:e2e for e2e tests