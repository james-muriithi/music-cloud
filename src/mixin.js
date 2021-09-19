export default {
    methods: {
        msToTime(duration) {
            let seconds = Math.floor((duration / 1000) % 60),
                minutes = Math.floor((duration / (1000 * 60)) % 60);

            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;

            return minutes + ":" + seconds;
        }
    }
};