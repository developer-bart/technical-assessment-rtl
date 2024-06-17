# Technical Assessment

This is a technical assesment for RTL.

## 🚀 Quick start

1.  **Clone the project**

    ```shell
    git clone git@github.com:developer-bart/technical-assessment-rtl.git
    ```

2.  **Node version**

    _Make sure you have [nvm](https://nvm.sh) installed._

    ```shell
    nvm use
    ```

3.  **Install & start**

    ```shell
    yarn && yarn start
    ```

## Gatsby?

Yes Gatsby. I had an old Gatsby starter project laying around which I decided to use. This way I can show I'm comfortable setting up a project from scratch.

It's based on my [Gatsby-v5-Starter](https://github.com/developer-bart/Gatsby-v5-Starter) repo.

## Theme Toggle

I've added a theme toggle using `useContext` for keeping track of the global state. A theme (light/dark) is being injected in the ThemeProvider wrapping the entire project. That enables the `theme` property to be available in Styled-Components everywhere.

See commit [Added the theme toggle and the header](https://github.com/developer-bart/technical-assessment-rtl/commit/acc1133e6f3f5612cf0e5b6d0e1550a47cf6f97c#diff-639b39dc7c8fa5ec11491e030f9add3c94620cae4c45a8e0a9412103659e41df)

## Rendering article cards

I've rendered the article cards on the homepage based on the data.json that was provided by rtl.

See commit [Rendering the article cards based on the data.json](https://github.com/developer-bart/technical-assessment-rtl/commit/cafba1c26e1906eab893b85f599f3d608cf842e5)

## SSR & dynamic pages

To show I understand and can implement different ways of rendering I implemented for every article a page using SSR. These pages also have dynamic url's, meaning when the data source (normally an api endpoint instead of data.json) would be updated you don't need a new build to create a new article page. When a route doesn't match an article it will return a 404 status. For this implementation it's important to make sure your sitemap is generated correctly so Google knows what pages are available.

Other options would be SSG or DSG. For marketing/landing pages SSG is the preffered rendering options for SEO reasons.

See commit [Added dynamic pages for articles](https://github.com/developer-bart/technical-assessment-rtl/commit/b744a27acf8c91132b0add9785516a2fbc16b538)

## Unit testing

I've setup unit testing for this project and added a simple unit test to see if the Intro component is rendered correctly. This way of testing has my preference over snapshot testing since snapshot testing can be unreliable when snapshots are updated when they shouldn't.

Unit tests are running automagically while pre-commiting and when running a build.

See commit [Added unit-testing](https://github.com/developer-bart/technical-assessment-rtl/commit/471f6efedb51b983450264abb7682d429737e2c5)

## Netlify

This project is running on [Netlify](https://technical-assessment.netlify.app/). I've created a CI/CD setup where every push to the `master` branch will automagically runs a new build. Also a deployment preview is generated for every PR.

See open [PR example](https://github.com/developer-bart/technical-assessment-rtl/pull/2)

For Gatsby, Netlify is the obvious choice since Netlify took over Gatsby in Februari 2024 and thus has a seemless implementation. If this would have been a Next.js project Vercel would have been the obvious choice.
