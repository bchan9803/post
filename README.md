# <em><strong>Post!</strong></em>

Welcome to <em><strong>Post!</strong></em>, a news article update notifier website, which notifies the user for new news article in a once per day manner! 📰📨

## Table of Contents

1. [Overview](#overview)
2. [Development Process](#development-process)
3. [Learnings](#learnings)
4. [Backend Link](#backend-link)
5. [License](#license)

## Overview

<em><strong>Post!</strong></em> sends email updates to users informing them of a new news article from the following news outlets: Axios, Politico, and the Los Angeles Times. <em><strong>Post!</strong></em> does this on a one time per day manner.

This project focuses primarily on the back end, since it depends on making API calls to add data to a MongoDB database, as well as fetching the data to be used with the web scrapper.

## Development Process

<em><strong>Post!</strong></em> is built using the Vite/React framework. It utilizes the Bootstrap library for quick styling and component utilization.

On the front end side of things, Post! look to be only a form page. However, the main focus of Post! is on the back end. Through the use of APIs built with Express/Node, Post! sends data to a MongoDB database, which gets stored for later fetching.

When the application needs to send updates to the user, it fetches the user's news outlet choice and email address from the databse. After this is done, web scrapping, which is powered by the Cheerio library, is done on the respective news site, in order to look for and return the headline of a new news article. Once this is done, the application uses Nodemailer to send an email to the user, notifying them of the new article.

All of the frontend of this project is being hosted Vercel, while the back end is hosted on Render.

## Learnings

Throughout the development of this project, I worked with Bootstrap to add styling and responsiveness to the program. Bootstrap shortened the time needed to add styling to the project.

Working on <em><strong>Post!</strong></em> strengthend my understanding of Express, since this project required making API calls to store the user's news outlet choice and email address. While making those APIs, I utilized the appropriate HTTP methods and implemented error handling on the API, so that the API would be called without error.

This project also taught me the process behind deploying and hosting websites. In particular, the project's front end is hosted on Vercel, while the back end is hosted on Render. This is done to fully utilize the resources of both services.

## Backend Link
Since <em><strong>Post!'s</strong></em> back end is being hosted on a different service, here is the link to the backend's repo: https://github.com/bchan9803/postbackend

## License

This project is licensed under the [MIT License](LICENSE.txt) - see the [LICENSE.txt](LICENSE.txt) file for details.
