# Smallchat

Smallchat is a small application built as part of an interview process where I was asked to build something cool in less than 100 lines of code.

The resulting application is a chat app, that prompts users with a topic to discuss. Sort of like guided (but not enforced) small talk.

Lines of code including `src/`, `index.html`, and `index.js` is exactly 100 lines.  I didn't include any libraries or `package.json` in this count.

## Running the application

You can see this application running on heroku [here](https://smallchat-gary.herokuapp.com/). You can also run this app by cloning this repository, running `npm install` and `node index.js`.

## Using the application

 1. Take note of the topic at the top of the screen.
 1. Enter your first name in the first name box at the bottom of the screen.
 1. Type your messages, when its complete, press enter.

## Technology used

I opted to use the below libraries for creating this application (I didn't count the libraries themselves against the 100 lines).

 - Firebase
  - This is used as a real time eventing engine, allowing chats to show as the user's type them.
 - React
  - Used for all the rending.
 - Babel (browser mode)
  - I wasn't sure if build tasks like grunt would count against me, so I went with inline script tags to save lines.

## Out of scope features.

These are things that would be nice to have, wouldn't fit in 100 lines while still pretty printing the code.
 - Authentication
  - Ideally users could authenticate so that they know their chatting with other real users, and your chats are actually tied to a user account and not a username.
 - 1:1 Chats
  - This is meant to be an online simulation of small talk, where the chats would be person to person, not a group.
 - Tie into Match.com
