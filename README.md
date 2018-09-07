## Angular Movie Site

**Version: 0.1**

## How To run

**Required**

- [Angular CLI](https://cli.angular.io/)

**Step 1**

- Clone the repository `git clone https://gitlab.com/MiguelRVA/angular-movie-site.git`

**Step 2**

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Information

- This little site was made as part of a test, the main state is handled througt and Angular service, and most of the structure of the code follows and MVC approach.
- Some animations where made with the Angular Animations Library for the best Performance, and the Responsive design is made with SCSS and Flexbox no third party libraries (need more testing is more devices tho...).
- I made use of [TMDb](https://www.themoviedb.org/) to fetch trailer for the movies in the mock data (the whole app can be refactor to fetch the movies too).
- I implemented some simple Pipes to handle URL sanitazer and other minor things.

## Structure

**Main Components**

- **Home**
- **Movie List**
- **Movie Detail**

**Shared Components**

- **Toolbar**
- **Movie Item**
