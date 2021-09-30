const app = Vue.createApp ({
    data() {
        return {
            spaceImg: null,
            date: null,
            title: null,
            explanation: null,
            mediaType: null,
            spinner: true
        }
    },
    mounted(error) {
            axios
            .get("https://api.nasa.gov/planetary/apod?api_key=2jbed0ziekmkhL6uZBoIkbPdaSVSdL1H2LGBxJHI")
            .then(response => (console.log(response), this.mediaType = response.data.media_type, this.spaceImg = response.data.url, this.date = response.data.date, this.title = response.data.title, this.explanation = response.data.explanation, this.spinner = false))
            .catch(e => (console.log(e)))
        }
})

app.mount("#app")