const express = require('express');
const app = express();
const port = 3000;
const path=require('path');
const { randomUUID } = require('crypto');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

let posts=[
    {
        id: randomUUID(),
        username:'john',
        content:'hello world'
    },
    {
        id: randomUUID(),
        username:'jane',
        content:'hi there'      

    },
    {
        id: randomUUID(),
        username:'doe',
        content:'good morning'  
    }
    
];
app.get('/posts', (req, res) => {
        res.render('index.ejs', { posts });
});
app.get('/posts/new', (req, res) => {
    res.render('new.ejs');
});
app.post('/posts/new', (req, res) => {
    const { username, content } = req.body;
    posts.push({ id: randomUUID(), username, content });
    res.redirect('/posts');
});
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    res.render('show.ejs', { post });
});
app.get('/posts/:id/edit', (req, res) => {
    const { id } = req.params;
    const post = posts.find(p => p.id === id);
    if (post) {
        res.render('edit.ejs', { post });
    } else {
        res.status(404).send('Post not found');
    }
});

app.patch('/posts/:id', (req, res) => {
    const { id } = req.params;
    const { username, content } = req.body;
    const post = posts.find(p => p.id === id);
    if (post) {
        post.username = username || post.username;
        post.content = content || post.content;
        res.redirect(`/posts/${id}`);
    } else {
        res.status(404).send('Post not found');
    }
});

app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter(p => p.id !== id);
    res.redirect('/posts');
});

