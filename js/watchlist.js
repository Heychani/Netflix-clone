const watchlistVue = new Vue({
    el: "#netflixWatchlist",

    data: {
        watchlist: [],
    searchInput: {
        searchBox: "",
    },
},

    methods: {
        removeWatchlist() {
            localStorage.clear();
            this.watchlist = [];
        },

        removeWatchlistItem(index) {
            this.watchlist.splice(index, 1);

            localStorage.setItem("movies", JSON.stringify(this.watchlist));
            this.watchlist = JSON.parse(localStorage.getItem("movies"));
        }, 

        theSearch() {
            let input = getElementById("searchBox").value;
            if (input == "id") {
                return "id";
            } else {
                alert("Please search another title, category or genre");
            }
        },
    },

    mounted() {
        if (!localStorage.getItem("movies")) {
            let arrayListItem = [];
            localStorage.setItem("movies", JSON.stringify(arrayListItem));
        }

        this.watchlist = JSON.parse(localStorage.getItem("movies"));
    },
});