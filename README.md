# DummyPosts
This is a repository containing a coding task from Acterio company.

## Build and run locally

To build and run the app locally on your machine you need to:

- Get the code on your local device 
- Open the folder containing the code
- Run `npm install` and then `npm start` using terminal or CLI

This will allow you to run the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Pages

### Posts Page

The posts page is located at "/posts". However, since the project is very simple and has no homepage, users who open the "/" URL will be automatically redirected to "/posts". Upon loading the page, the app makes a GET request to an API to fetch the list of posts. The posts are displayed in a simple and responsive grid UI, with colors inspired by the official Acterio.com website. Each post is represented by a card that displays the post title, body, and additional information. Clicking on a post card will navigate to the dedicated post page for that particular post.

### Dedicated Post Page

The dedicated post page is located at /posts/:id, where :id is the post ID. When the page loads, the app makes a GET request to the API to fetch the post with the specified ID. The post is displayed in a simple UI with its title and body. All other information provided by the API is also displayed on the UI.

## Technologies and Process

### Technologies used

- React
- React Router
- Material-UI

### Process

The project was initialized using npx create-react-app. The first step was to install the dependencies. Then, the component tree was created, followed by the implementation of logic such as fetching data from an API and navigating between pages. However, the most time-consuming aspect of the project was creating and styling the UI.

### Potential Future Improvements

The UI could be further developed, to make it even easier to navigate and more eye-pleasing, however in my opinion the biggest improvement would be introduction of photos or graphics, that were not provided by the API. Afterwards a functionalities such as liking and sharing posts could be implemented. A pagination could be a quality of life change, that could help users organise the content easier. Implementation of search bar would be another big improvement. Finally, introducing a funcionallity allowing users to create and edit posts would be probably very desirable.
