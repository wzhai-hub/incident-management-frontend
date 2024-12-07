# Getting Started with Create React App

## project dependency environment

| Field           | Version  |
|-----------------|----------|
| nodejs version  | v18.20.3 |
| yarn version    | v1.22.19 |


## Run project command
| Command Type    | Command                      |
|-----------------|------------------------------|
| install         | yarn install                 |
| Build           | yarn compile                 |
| Package         | yarn build                   |
| Run Command     | yarn start                   |
| Test Command    | yarn test [case path:./src]  |

## API Design Document,same as backend spring
[API Design Document](./Document/API-Design-document.pdf)

## Application Configuration
- Default http://localhost:3000

## Need to enhance in the future
Here is the English translation:

1. Write test cases for each page operation button.
2. Write test cases for each API to provide code coverage.
3. The project needs to integrate with ESLint to improve code robustness and provide coverage.
4. Frontend code should be packaged into the Java Spring project. Due to time constraints, I didn't do this.
5. Set up an automated pipeline, including compilation, packaging, creating Docker images, running test cases, etc.
6. Containerizing both frontend and backend in the same environment makes it easier to debug code.
