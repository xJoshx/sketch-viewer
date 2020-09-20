# Sketch viewer

## Architecture

![Untitled-2020-09-19-0658(1)](https://user-images.githubusercontent.com/7399498/93716271-2346b700-fb6f-11ea-8c50-bc121dbf4966.png)


## Tech stack

1. Create React App
2. Apollo
3. Styled Components
4. React Router
5. React Testing Library

## Decisions

- I left for the end substituting the hardcoded variables with the ones in the theme because I wasn't sure if I would need to add more (specially in the `space` part), as I don't have a predefined theme and I didn't wanted to add more complexity using `styled-theme`, which I love.
- The first implementation of the `DocumentsViewer` was with pure CSS Grid. I was very happy and I was about to commit... until I realized that the names were not aligned. So I decided to create two flex items, one for the `Link` and another one for the `ImageWrapper` (I created it just because of this). The first one is for the layout of the component itself, the second one for filling the remaining space of the row and center vertically the image.

  - I felt that was looking a bit weird for the fact you can click around the empty space and still navigate, so I added a hover state to show visually the specific areas to navigate. At first I was doubting because it's a huge empty area and the only potential clickable areas could be the name and the image, but I think makes sense and is consistent with the `DocumentViewer` concept.

- I will assume that the `name` always exists and cannot be repeated and I will use as unique identifier for the sake of simplicity
- I'm assuming that in every `entry` **must have** two values, the first item is the thumbnail data and the second one the high resolution one
- You will see a few empty styled components. That's intended. I like to use them to keep the consistency in the code and give some context
- The most complex decision that I've taken here is how to approach the data fetching. I didn't want to use a `context` for fetching, storing and serving the data, because for that we can use Apollo's cache and it's not giving any value having an extra state with data that we just fetch from the server (more states = more problems).

  - So, my first approach was querying on the `DocumentViewer` component, then reading from the cache in the `ArtboardViewer`. Makes sense, it was working like a charm... until you refresh the artboard. So, if there's no cache to read from because the component that has the responsability of fetching the data is not mounted, you can imagine the disastrous result.

  - Then I started to try different approaches, such as using `apollo-cache-persist` to keep the cache in the local storage. Yes, I started to overcomplicate my life. I don't like such complex solutions that make people to figure out or to look in the documentation how this tool works, so I decided to rethink the architecture.

  - After a few minutes of cold thinking, the solution was clear. Slightly uglier tho. I will fetch all the data from the root component (`App`) and then pass it through props. I added this line `const documentId = location.pathname.split("/")[1];` that is not as beautiful as using the `useParams` hook but I think it's easier to understand than to add a new library that conditionates the whole structure.

  - The good thing, and this is the biggest win with this refactor, is that testing will be **dramatically** simpler. As we decoupled the fetching logic from the components, it's esentially like testing pure functions. So no mocked provider, no mocked resolvers, just a plain object with data and that's all the setup that it will need. Yay!

- What's meaning of these `Header.Title = Title; Header.CloseButton = CloseButton;...` ? I try to compose as much as possible when creating components, so we don't need to create several times similar components or to pass too many props into a single one. In the `Header`, I created two abstractions out of it: `HeaderDocumentViewer` and `HeaderArtboardViewer` . But if we would need to create more, or those abstractions would grow too much and we would need to move them into a separate file, makes sense to don't need to import all the components that belong to the vanilla `Header`, or even allow them to be used outside of it, as they are designed and belong to that component. Also, gives some extra context.
- I also set a minimum width of `320px` (portrait iPhone SE) for the document to be able to always offer a minimum of quality when displaying the elements (specially the header of the `ArtboardViewer`). Also, I set the breakpoints for the media-queries to `767px`, which is the width of the mobile devices smaller than the iPad 9.7 inches on portrait mode, `1024px` which is the width of the iPad pro on portrait and the iPad 9.7 in landscape and another one in `414px`, which is the iPhone 8/x Plus (the wider of all the Apple devices).

## Things that I would do if I would have more time

- `HeaderArtboardViewer` I would think how to make it more composable, for example exporting the navigation component and the title, to avoid passing those props and make it cleaner for example to disable the navigation buttons when we reach the first/last element of the list. Also, some styles from there would be cool to improve like bigger navigation buttons with the different states. Also, I would rethink how to position the title and the navigation better, I'm not 100% happy with the approach I've taken.
- Mobile design is not 100% perfect, specially for iPhone SE, I would like to polish it. The header title is not handling the names with big names that can overflow, I tried several approaches but none of them convinced me so for the sake of simplicity I just decided to exclude it
- I would also update it for when navigating with the navigation controls and changing the artboard, the URL would change
- Maybe the last fix is not the most elegant but I wanted to finish the coding challenge with it working. It's the one for updating the url after clicking on the navigation buttons.
- I tried to have it running in production with `now` but gave me `CORS` . I know it's not needed but I would like to have it running there 😛

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
