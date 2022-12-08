const apiKey = 'tU0E3b2J2wXj0sT2jVpAAbAQqp14NOyl';
const trendingGifsEndpoint = 'http://api.giphy.com/v1/gifs/trending';

const fetchTrendingGifs = (n) => fetch(`${trendingGifsEndpoint}?api_key=${apiKey}&limit=${n}`);

const extractGifListFromResponse = (response) => response
    .json()
    .then((jsonResponse) => jsonResponse.data);

const embedGifInIFrame = (url) => {
    const iFrame = document.createElement("iframe");
    iFrame.src = url;
    return iFrame;
}

const addIFrameToGifContainerElement = (iFrame) => document
    .getElementById("gif-container")
    .appendChild(iFrame);

fetchTrendingGifs(10)
    .then(extractGifListFromResponse)
    .then((gifList) => {
        gifList.forEach((gif) => {
            const iFrame = embedGifInIFrame(gif.embed_url);
            addIFrameToGifContainerElement(iFrame);
        });
    });