let myVue = new Vue({
    el: "#netflixApplication",

    data: {
        searchInput: {
            searchBox: "",
        },
        searched: false,
        InList: false,
        fullList: false,
    
        movies: [
            {   id: "trending-now",
                title: "Chef's Table Pizza",
                genre: "",
                comingSoon: false,
                availDate: 01/09/2022,
                description: "Dig into the best Pizzas from around the world, prepared by renowned chefs who bake passion, creativity and hard work into every slice",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTiMViL0x1CSbXYsEnrVb7yIS_s2MBRf0aUiOyGQEGqXT0Y0AUW",
                preview: "",
            },
    
            {
                id: "trending-now",
                title: "This is 40",
                genre: "",
                comingSoon: false,
                availDate: 01/01/2015,
                description: "After a big birthday, married couple Pete and Debbie wrestle with realities of parenthood, romance and getting older",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfUJ80d7niqc09vle-s1YHPX-YEvSF0Z6cx6CzDIoSpR_7TS6ixpufkx8wL3saxfU7fjrfwm1yYrr1vbkdA-KdygfrZS8z3N21W0MWBcYP8.webp?r=7a5",
                preview: "",
            },
    
            {
                id: "trending-now",
                title: "Buy my house",
                genre: "",
                comingSoon: false,
                availDate: 01/06/2022,
                description: "In this fast-paced reality series, homeowners negotiate with real estate investors in hopes of selling their houses on the spot",
                image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKV-mLGnUzDeqMclcGm452NpjWGC3Ja2JbXj4lVtvYH3Edkzz3",
                preview: "",
            },
    
            {
                id: "trending-now",
                title: "Friends",
                genre: "",
                comingSoon: false,
                availDate: 01/08/2009,
                description: "This hit sitcom follows the merry misadventures of six-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSw3DDSeLkHdqYFndbfOH7P8MDhaHvdr6YxwnfdEDJXNoXg3c-ju2mxCXD3EbZZWPJQsGqO1EBGr8mOiruBTNFy3SzmJBwPDPa0.webp?r=75b",
                preview: "",
            },
    
            {   
                id: "trending-now",
                title: "The Big Bang Theory",
                genre: "",
                comingSoon: false,
                availDate: 01/05/2012,
                description: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQxxYpzILaZr3UFJp6pabVypB6BMPs7ly5CgL6fIERLjhnC1VvV3dhyEMQPiK8Y_x1vPWLA5TUl-2A1YsQqN7-vM6YkfnKeLl4.webp?r=bdb",
                preview: "",
            },
    
            {
                id: "documentaries",
                title: "Fantastic Fungi",
                genre: "Documentary Films, Science & Nature Docs",
                comingSoon: false,
                availDate: 01/03/2022,
                description: "Delve into the magical world of fungi, from mushrooms that clear oil spills to underground fungal networks that help trees communicate.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXRfhsWgx8aTL7u1jbBNKBSInj1UPFNaxvXnJbtF42ABHloeKG78cPnc9zF0PKtuEbG1aWqSZsXWtlGURNLtIus7ldgdBTphk5I.webp?r=b51",
                preview: "",
            },
    
            {
                id: "documentaries",
                title: "Crack, cocaine, corruption & conspiracy",
                genre: "Social & Cultural Docs, Documentary Films",
                comingSoon: false,
                description: "A cheap, powerful drug emerges during a recession, igniting a moral panic fueled by racism. Explore the complex history of crack in the 1980's.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUeEy7_YgFdfKW8GVp6KEW1JccRXOIUfQEaooqzbHmJpkhui_Vq4tDfDdkY4Kqc6iis9XGrzfLsgFUdVfZlFr6GSw4kqBvYYKJ2DG4yIIzgRUk7jsfRrYGynZO60tP2cMBK.jpg?r=94d",
                preview: "",
            },
    
            {   
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
    
            {
                id: "",
                title: "",
                genre: "",
                comingSoon: "",
                availDate: "",
                description: "",
                image: "",
                preview: "",
            },
        ]
    }



