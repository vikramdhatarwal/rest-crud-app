# REST Posts App

A simple RESTful CRUD app built with Node.js, Express, and EJS. It lets you create, view, edit, and delete posts through server-rendered pages and basic REST-style routes.

## Features

- View all posts in a responsive grid
- Open a single post details page
- Create a new post
- Edit an existing post
- Delete a post with confirmation
- Styled UI with reusable buttons and cards

## Tech Stack

- Node.js
- Express
- EJS
- method-override
- CSS

## Routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/posts` | Show all posts |
| GET | `/posts/new` | Show the create form |
| POST | `/posts/new` | Create a new post |
| GET | `/posts/:id` | Show one post |
| GET | `/posts/:id/edit` | Show the edit form |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |

## Setup

### Requirements

- Node.js installed

### Install dependencies

```bash
npm install
```

### Run the app

```bash
node index.js
```

Then open:

```text
http://localhost:3000/posts
```

If you prefer live reload during development, you can also use `nodemon index.js` if you have Nodemon installed globally.

## Project Structure

```text
Rest_Class/
├── index.js
├── package.json
├── public/
│   └── style.css
└── views/
    ├── edit.ejs
    ├── index.ejs
    ├── new.ejs
    └── show.ejs
```

## Notes

- Posts are stored in memory, so data resets when the server restarts.
- IDs are generated with Node's built-in `crypto.randomUUID()`.

## Author

Vikram Dhatarwal

## ScreenShots
<img width="1280" height="369" alt="image" src="https://github.com/user-attachments/assets/01544b89-0238-44e2-908c-e871f0125839" />
<img width="1280" height="371" alt="image" src="https://github.com/user-attachments/assets/f20a82ba-e551-47b5-8738-a8a0585c413f" />
<img width="1280" height="531" alt="image" src="https://github.com/user-attachments/assets/1da02f05-7f7d-4233-9212-319984ac06e7" />

