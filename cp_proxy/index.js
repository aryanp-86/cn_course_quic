const express = require('express');
const quic = require('node-quic');
const cors = require('cors');
const PORT = 3001;

const QUIC_SERVER_PORT = 1234;
const QUIC_SERVER_ADDRESS = '127.0.0.1';

const app = express();

app.use(cors());

app.get('/video/:videoName', (req, res) => {
    const { videoName } = req.params;

    quic.send(QUIC_SERVER_PORT, QUIC_SERVER_ADDRESS, videoName)
        .onData((data, buffer) => {
            if (data.error) {
                res.status(404).send(data.error);
            } else {
                res.send(buffer);
            }
        })
        .onError((error) => {
            console.error('Error fetching video data from QUIC server:', error);
            res.status(500).send('Error fetching video data.');
        });
});

app.listen(PORT, () => {
    console.log(`Proxy server started on http://localhost:${PORT}`);
});
