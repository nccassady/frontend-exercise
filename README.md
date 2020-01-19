This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## To Install and Setup
Run `npm install`

Rename `.env.local.sample` to `.env.local` and replace `{client_id}` and `{secret_key}` with client id and secret key respectively


## To run
Run `npm run`


## Thoughts/Discussion


### Challenges
One of the biggest challenge I faced in this exercise was implementing the category filter. I was able to retrieve the list of categories and products almost right away, but I did not realize at first the format the filter required or that I needed the ProductProjectionsSearch endpoint, and the ProductProjections endpoint did not support the filter argument. Thankfully, the documentation was informative and useful in resolving this obstacle.


### Code I'm Proud of
I'm pretty happy with how I was able to pass the list of categories selected from the Categories component to the Products component. 


### Code I'm Less than Proud of
Given more time, I'd have liked to clean up most areas a little bit, to make it more DRY and less fragile. The implementation of the API in api.js and products.js is admittedly pretty rushed. I'd have also liked time to add styling to give the function in the exercise some form to show it off better. 


### Tradeoffs
I obviously spent most of my time on the function of this exercise as opposed to the style and presentation. A lot of my code is also pretty quick and dirty. There are a number of areas I'd like to clean up and bring up to par with best practices, but I am happy that I was able to learn a new API and get a basic implementation running as quickly as I did. 


### General Thoughs
The CommerceTools API and SDK were easy to set up and the docs were invaluable in creating this project. I appreciate how thorough the documentation is and the numerous examples included. Of the APIs and libraries I have used in the past, this was one of the more stable, straighforward, and well documented of them. I did spend more time on this than recommended, roughly around 10 hours total. I am probably a little rusty as this was the first frontend I have created from scratch in a while. 
