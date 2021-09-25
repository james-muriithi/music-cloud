const globalNavigator = typeof navigator !== "undefined" && navigator;

const sizes = [{
        width: 96,
        height: 96,
    },
    {
        width: 144,
        height: 144,
    },
    {
        width: 192,
        height: 192,
    },
    {
        width: 256,
        height: 256,
    },
    {
        width: 512,
        height: 512,
    }
];

function addSongMetaData(title, artist, songCover, album = "Unknown Album") {
    if (globalNavigator) {

        let artwork = sizes.map(size => {
            return {
                src: songCover.replace("{w}", size.width).replace("{h}", size.height),
                sizes: `${size.height}x${size.width}`,
                type: "image/png",
            }
        });

        globalNavigator.mediaSession.metadata = new window.MediaMetadata({
            title,
            artist,
            album,
            artwork,
        })
    }
}

export {
    addSongMetaData
};