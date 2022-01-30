// Simple Express server setup to serve for local testing/dev API server
const compression = require('compression');
const helmet = require('helmet');
const express = require('express');
const path = require('path');

const DIST_DIR = './dist';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(DIST_DIR));
app.use(helmet());
app.use(compression());
app.use(/^(?!\/api).+/, (req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
});

app.get('/api/v1/endpoint', (req, res) => {
    res.json({ success: true });
});

app.listen(PORT, () =>
    console.log(
        `✅  API Server started:${HOST}:${PORT} `
    )
);
