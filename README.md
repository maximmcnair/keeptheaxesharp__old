# Keep The Axe Sharp
[ ![Codeship Status for maximmcnair/keeptheaxesharp](https://codeship.com/projects/2c3e1af0-1dd0-0133-2090-06d3bb3e96db/status?branch=master)](https://codeship.com/projects/95113)

---

## Dependencies
  - [node.js](https://nodejs.org) `~0.10.37`
  - [npm](https://www.npmjs.com) `~1.4.28`
  - [gulp.js](http://gulpjs.com/) `~3.8.11`

## Setup

```
npm install
npm gulp -g
```

## Running the app
---

`gulp dev` - This will build assets and create a websever on `localhost:3600`. It also watches the `src` folder for changes and will build asssets, automacially reload the webserver and run all tests and linting.

## Release History
---

This repo follows [Semantic Versioning](http://semver.org/).

## User Stories
### Review
- [ ] As a user, I want to review my cards
- [ ] As a user, I want to pick tags to filter cards to review by.
- [ ] As a user, I want to see the quesiton without the answer.
- [ ] As a user, I want to see the answer after asking for it.
- [ ] As a user, I want any code on the card to have syntax highlighting.
- [ ] As a user, I want to mark a card correct.
- [ ] As a user, I want to mark a card wrong.
- [ ] As a user at the end of a session, I want to see how many cards I got correct.
- [ ] As a user at the end of a session, I want to see how many cards I got wrong.

### Create
- [ ] As a user, I want to create a card.
- [ ] As a user, I want to tag a card.
- [ ] As a user, I want to use markup for writing cards.
- [ ] As a user, I want to enter the question side of a card.
- [ ] As a user, I want the app to validated my question.
- [ ] As a user, I want to enter the answer side of a card.
- [ ] As a user, I want the app to answer my question.
- [ ] As a user, I want to add tags to a card.

### List
- [ ] As a user, I want to see all my cards.
- [ ] As a user, I want to filter my cards.
- [ ] As a user, I want to edit a card.

### Onboarding
- [ ] As a user with no cards, I want to be prompted to add cards.
- [ ] As a user with no cards, I want to be prompted to try the demo for ideas.

### Home
- [ ] As a user, I want to see an intro page for the app.
- [ ] As a user, I want to demo the app with prefilled cards.
- [ ] As a user, I want to signin with github.
