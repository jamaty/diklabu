# Diklabu 📖

![Testing](https://github.com/jamaty/diklabu/workflows/Build%20and%20Deploy%20Testing/badge.svg)
![Master](https://github.com/jamaty/diklabu/workflows/Build%20and%20Deploy%20Master/badge.svg)

## Vision

For parents, schoolchildren, their teaching and educational staff as well as for the school management, who are looking for a central information channel related to school matters, the digital class book Diklabu is a central information and communication system that helps to shape the heterogeneous processes of everyday school life and enables an efficient exchange between the participants.

![Splash Image](resources/teaser.png)

## Install

You need to have NodeJS installed for this to work.
Find and download your version [here](https://nodejs.org/en/download/).

```sh
// Install dependencies
npm install

// Install Ionic CLI
npm install @ionic/cli

// Run on localhost
ionic serve
```

## Planned Versions

- 0.2 **Target version for final prototype**

  - _Working login page with Google and Email Auth_
  - _Connections between different person roles_
  - _CRUD operations on attendance lists from a teachers perspective_
  - _CRUD operations on sick notes from a parents perspective_
  - _Send push messages to corresponding parents of their chilren were reported missing by teacher_
  - _Upload sick note to report student sick by their parent_

- 0.1.3
  - _Currently in development_

## Version History

- 0.1.2
  - First draft of Anwesenheitsverwaltung
  - Merged all feature branches
  - New mockup data for people and attendances
  - Presented on 06.06.2020 as current prototype version
- 0.1.1
  - First draft of authorization service
  - First draft of messaging service
  - First darf of cloud functions
- 0.1
  - Initial commit, rough framework
