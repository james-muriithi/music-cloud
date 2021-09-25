import store from '../store';

const globalNavigator = typeof navigator !== "undefined" && navigator;

const mediaSessionEnabled = globalNavigator ?
    "mediaSession" in globalNavigator :
    false;

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
    if (mediaSessionEnabled) {

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


const addActionListeners = () => {
    // play previous
    globalNavigator.mediaSession.setActionHandler("previoustrack", () => {
            console.log("not yet supported")
        })
        // play next
    globalNavigator.mediaSession.setActionHandler("nexttrack", () => {
        console.log("not yet supported")
    })

    // play song
    globalNavigator.mediaSession.setActionHandler("play", () => {
        store.dispatch("player/setIsPlaying", {
            isPlaying: true,
        });
    })

    // pause song
    globalNavigator.mediaSession.setActionHandler("pause", () => {
        store.dispatch("player/setIsPlaying", {
            isPlaying: false,
        });
    })

    // forward song
    globalNavigator.mediaSession.setActionHandler("seekforward", () => {
        console.log("not yet supported")
    })

    // rewind song
    globalNavigator.mediaSession.setActionHandler("seekbackward", () => {
        console.log("not yet supported")
    });

};

if (mediaSessionEnabled) {
    addActionListeners()
}

export {
    addSongMetaData
};