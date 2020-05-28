In depth: When and why are setState() calls batched?

https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973#48610973

The Many Ways to Return JSX

https://scotch.io/starters/react/returning-jsx

Where to Initialize State in React

https://daveceddia.com/where-initialize-state-react/

# React-Practice: React based projects

## Description of folders in this repository:

### Tic-tac-toe game on official React website

1 my-app: Using prop drilling and class components

The following projects use the GitHub API for backend. E.g. users, repository links etc.

### Projct description: Using search bar, we can search github users according to their guthub username/login.

2_github_finder: Using prop drilling and class components

2_github_finder_hooks: Using prop drilling and functional components, React hooks

2_github_finder_hooks_context: Using pure functional components using React hooks. Context API to manage state at application level.

The following projects are MERN stack. 

### Projct description: Users can add/update/delete contacts online. Only users who create contacts can edit or delete them.

3_contacts_manager: MERN stack app. Context API. Functional components + React Hooks. Auth error on Home page=landing page.

3_contacts_manager_with_welcome_page: MERN stack app. Context API. Functional components + React Hooks. Added welcome page=landing page to avoid Auth error on first page.

### Projct description: Intro to redux with react. materializecss for UI design.

4_it_logger_redux: React front-end, 'json-server' backend. 'redux' for app level state management. 'redux-thunk' for async calls in actions. 
'redux-devtools-extension' for easy access to redux devtools on chrome. 'react-redux' to connect react and redux. 
Users can add/update/delete logs. Add/delete technicians. json-server as backend API. materializecss for UI design.

### Check package.json scripts section to see how to start each application using npm.

### Refer to understand react with hooks:
-- https://overreacted.io/a-complete-guide-to-useeffect/
-- https://github.com/bradtraversy/contact-keeper/tree/hookfix#this-branch-has-been-refactored-to-take-a-more-hook-orientated-approach

===
Note: This project is same as ContactsManagerMERN. Created a separate repository for it to use heroku for deployment. This needed heroku to be added as remote too.
