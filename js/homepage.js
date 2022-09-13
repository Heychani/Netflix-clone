let myVue = new Vue({
    el: "#netflixApplication",

    data: {
        searchInput: {
            searchBox: "",
        },
        list: false,
        completeList: false,
    
        movies: [
            {   id: "trendingNow",
                title: "Chef's Table Pizza",
                genre: "Social & Culture Docs, Docuseries, Food & Travel TV",
                comingSoon: false,
                availDate: 2022,
                description: "Dig into the best Pizzas from around the world, prepared by renowned chefs who bake passion, creativity and hard work into every slice",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQJWZeUipOPfMjKHJpsoQ2EglYXiH9YFAbhZwXUNvTEZ6R0TdYWEIdXQv_lqweQxBKMROZrOaPN42T1VGYIBwrtXU38HKgtc_AoEF9lk1GIr48B3wljzefliL5D6L20sr9Rv.jpg?r=2b0",
                preview: "https://youtu.be/wyXnoeJoKLw", 
            },
    
            {
                id: "trendingNow",
                title: "This is 40",
                genre: "Romantic Comedies, Comedies, Romantic Movies",
                comingSoon: false,
                availDate: 2015,
                description: "After a big birthday, married couple Pete and Debbie wrestle with realities of parenthood, romance and getting older",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfUJ80d7niqc09vle-s1YHPX-YEvSF0Z6cx6CzDIoSpR_7TS6ixpufkx8wL3saxfU7fjrfwm1yYrr1vbkdA-KdygfrZS8z3N21W0MWBcYP8.webp?r=7a5",
                preview: "https://youtu.be/46sZURieja0",
            },
    
            {
                id: "trendingNow",
                title: "Buy my house",
                genre: "Home & Garden Reality TV, Competition Reality TV, Reality TV",
                comingSoon: false,
                availDate: 2022,
                description: "In this fast-paced reality series, homeowners negotiate with real estate investors in hopes of selling their houses on the spot",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTlF4L-Q35BVOx1DLxstW2eYPywQK8CgXPFrVoYsOBA-KZ1W8H5E2Scz923aH3eNdZFlmRDXQ-c8tX76ubSnBK_2m1lCtu7yeKaGU7EnRhmJ-oRrt_TLYNrWX6pRoCRvheqo.jpg?r=ceb",
                preview: "https://youtu.be/5hm0-1UZBXA",
            },
    
            {
                id: "trendingNow",
                title: "Friends",
                genre: "Sitcoms, TV Comedies, US TV Shows",
                comingSoon: false,
                availDate: 2009,
                description: "This hit sitcom follows the merry misadventures of six-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSw3DDSeLkHdqYFndbfOH7P8MDhaHvdr6YxwnfdEDJXNoXg3c-ju2mxCXD3EbZZWPJQsGqO1EBGr8mOiruBTNFy3SzmJBwPDPa0.webp?r=75b",
                preview: "https://youtu.be/IEEbUzffzrk",
            },
    
            {   
                id: "trendingNow",
                title: "The Big Bang Theory",
                genre: "Sitcoms, TV Comedies, US TV Shows",
                comingSoon: false,
                availDate: 2012,
                description: "Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTQxxYpzILaZr3UFJp6pabVypB6BMPs7ly5CgL6fIERLjhnC1VvV3dhyEMQPiK8Y_x1vPWLA5TUl-2A1YsQqN7-vM6YkfnKeLl4.webp?r=bdb",
                preview: "https://youtu.be/rCj-Fb1OmXg",
            },
    
            {
                id: "documentaries",
                title: "Fantastic Fungi",
                genre: "Documentary Films, Science & Nature Docs",
                comingSoon: false,
                availDate: 2022,
                description: "Delve into the magical world of fungi, from mushrooms that clear oil spills to underground fungal networks that help trees communicate.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXRfhsWgx8aTL7u1jbBNKBSInj1UPFNaxvXnJbtF42ABHloeKG78cPnc9zF0PKtuEbG1aWqSZsXWtlGURNLtIus7ldgdBTphk5I.webp?r=b51",
                preview: "https://youtu.be/2wzBPSbTGYM",
            },
    
            {
                id: "documentaries",
                title: "Crack, cocaine, corruption & conspiracy",
                genre: "Social & Cultural Docs, Documentary Films",
                comingSoon: false,
                availDate: 2022,
                description: "A cheap, powerful drug emerges during a recession, igniting a moral panic fueled by racism. Explore the complex history of crack in the 1980's.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYUeEy7_YgFdfKW8GVp6KEW1JccRXOIUfQEaooqzbHmJpkhui_Vq4tDfDdkY4Kqc6iis9XGrzfLsgFUdVfZlFr6GSw4kqBvYYKJ2DG4yIIzgRUk7jsfRrYGynZO60tP2cMBK.jpg?r=94d",
                preview: "https://youtu.be/RbYdjyxDNtQ",
            },
    
            {   
                id: "documentaries",
                title: "Midnight Asia ",
                genre: "Social & Cultural Docs, Docuseries, Travel & Adventure Documentaries",
                comingSoon: false,
                availDate: 2022,
                description: "Night brings out the most playful side of Asia's metropolises. This docuseries captures the food, drink, music - and night owls who shine in the dark.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7O8lOp4kT485BRSI2gEpgIB2xOC5KdlWUR5haeK4lBQrIFrYs_03LXUhKbTDx__q-K2Ae0gZgJ3-RaYn2r9IQzC_UiYJAGOBV5SRlz7Va01xCQWhFsD71LKz9d6MJKxUZ0.jpg?r=47b",
                preview: "https://youtu.be/hZnQFUyQ8s0",
            },
    
            {
                id: "documentaries",
                title: "The Royal House of Windsor",
                genre: "Social & Cultural Docs, Docuseries, British",
                comingSoon: false,
                availDate: 2017,
                description: "Drawing on newly available info, this show traces how the British royal family has survived the last 100 years of power struggles, politics and more.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaLk1qx3CQy-12n_PRE2SrXbfN8Wxp5GLEphNlogSW3KlNW9vVPbBSvA_is8HNk-TfMlGVAZZ8QhReWCORWcq94d-JeIzerOxHo.webp?r=0fd",
                preview: "https://youtu.be/vLsyR3YxAuc",
            },
    
            {
                id: "documentaries",
                title: "Ugly Delicious",
                genre: "Social & Cultural Docs, Docuseries, Travel & Adventure Documentaries",
                comingSoon: false,
                availDate: 2020,
                description: "All the flavor. None of the BS. Star chef David Chang leads friends on a mouthwatering, cross-cultural hunt for the world's most satisfying grub.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQRNPx8pYspf1-8Uuq9hz8HGy6FjNjRMw61XOAEXCEuEqpXxTY6N_WJz2XHmJ6xUvuTqsJ93Oh98MsWqNG2yo5F4rUsfJ5GRYvi3VtHB0fy6cJLmNhu2cEbWFVG5Pc34LGON.jpg?r=2e6",
                preview: "https://youtu.be/pN_XItALHmM",
            },
    
            {
                id: "comedies",
                title: "Clueless",
                genre: "Romantic Comedies, Teen Comedies, Movies Based on Books",
                comingSoon: false,
                availDate: 1995,
                description: "At a Beverly Hills high school, queen bee Cher excels at makeovers and matchmaking. But figuring out her own love life? Ugh, as if! ",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXNtM9Cg_4UE6V6jZKDMWqClhI3PPXGzMvG1xUF1JViigPoTR36id2UV5qicqhQw04FA8Qmx__LZ7jgPHlJlx6R-g52-_cMzr4A.webp?r=420",
                preview: "https://youtu.be/Mgjwq1ZzdPQ",
            },
    
            {
                id: "comedies",
                title: "a Cinderella story",
                genre: "Kids & Family Movies, Comedies",
                comingSoon: false,
                availDate: 2004,
                description: "A teen meets the boy of her dreams at a dance before returning to toil in her stepmother's diner. Can her lost cell phone bring them togerther?",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSHwoL-NyKHN81-G_ex3-F3Yza7KCZyPMDtP-2x_goJvZ7AMfhRX203Htdns-qr6mXXYkwt0SjOcL8hsGLs5fpy7X6Y1ZFEx6c.webp?r=004",
                preview: "https://youtu.be/B_VFs9j95gc",
            },
    
            {
                id: "comedies",
                title: "The Campaign",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2012,
                description: "Plenty of mud gets slung when an inexperienced contender backed by two plotting benefactors goes up against a longtime North Carolina congressman.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeMQuL0Ydf2KRxxNCk7RChOzUPbrspBO7HObZS5mjf1JgZqjdDMOBVIKOSTyl9vuZLi7eoAR1m73H0GrnJZmseettsrJi3Hzzn8.webp?r=620",
                preview: "https://youtu.be/4qQ6UcU_JiE",
            },
    
            {
                id: "comedies",
                title: "Pitch Perfect 2",
                genre: "Musicals, Movies Based on Books, Comedies",
                comingSoon: false,
                availDate: 2015,
                description: "In hopes of being the first Americans to win a global a cappella competition, the Barden Bellas wage a note-for-note war with fierce European rivals.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcbPzdAWRUWj6lS6L0rkcSmNry5qhIrWd9bCUlgATUBEy_PZ8JFB43qrOpAxYAnZo1pDn8FFWELStgtnJKnWBS93Z6dBEG3l66c.webp?r=67a",
                preview: "https://youtu.be/1RgKlnG5aQY",
            },
    
            {
                id: "comedies",
                title: "Wine Country",
                genre: "Comedies",
                comingSoon: false,
                availDate: 2019,
                description: "",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABafnVa8p2DhlPDuMMk50KzlsyZ9ZoMGFFa30-dv1hOpln8aNzAAYwaS9wjT5t5xdgfr6NaF0YYPiYvemBD2uKZrqEEYlXaNF6Exww8H_UCaUta2ModXe5th85NNnBdhOI9Ah.jpg?r=5f9",
                preview: "https://youtu.be/aW_0MO-XKog",
            },
    
            {
                id: "realStories",
                title: "Amazing Interiors",
                genre: "British, Home & Garden Reality TV, Lifestyle",
                comingSoon: false,
                availDate: 2018,
                description: "Meet eccentric homeowners whose seemingly ordinary spaces are full of surprises, from a backyard roller coaster to an indoor aquarium.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf7OktOIOFUkZaHrlUToaFAUhjgB5GQkHC2OQ5lh6-1djdoj8fMfUcau6hhiGrT49ROJC24mQkLn83XElEHBqigR-Etrc89FrEh6lz_Eo_fcItfjBfc77n46tstnXGtuTV6F.jpg?r=cd9",
                preview: "https://youtu.be/ia-Hclo-ITs",
            },
    
            {
                id: "realStories",
                title: "Million Pound Menu",
                genre: "British, Food & Travel TV, Reality TV",
                comingSoon: false,
                availDate: 2019,
                description: "Next-gen restauranteurs get the chance to open their own pop-up eateries to impress the paying public -- and a panel of discerning U.K. investors.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXy0Oa90CCQ0Q0dZaQlEaWe4MuP8gOoL_uJhLlt9SYAex3YA6fTfmDgkme3SvhXUZ0qYW_nVPGp4yFcIAT1tC5KuSp2QsquyFukq-02Cl8BIlYrBcof_tjM3ZdOm6SbNuNDS.jpg?r=98c",
                preview: "https://youtu.be/0Ml4LdqdQHg",
            },
    
            {
                id: "realStories",
                title: "A Dog for Life",
                genre: "Docuseries, South African, Family Watch Together TV",
                comingSoon: false,
                availDate: 2021,
                description: "In this reality series, unique Cape Town families get matched with rescue dogs to find the perfect four-legged best friends they never know they needed",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZlf52g05LZMMHs704UxB9_nw282A6e8biutcTuI-aoIDWji3OnQFkUKhzJeEcKfqgJDreQxA9XzxwzhkQ0lN1z8BAjz0ORKgb4.webp?r=afd",
                preview: "https://youtu.be/uWR0iQ2McgA",
            },
    
            {
                id: "realStories",
                title: "Dark Tourist",
                genre: "Social & Cultural Docs, Docuseries, New Zealand",
                comingSoon: false,
                availDate: 2018,
                description: "From a nuclear lake to a haunted forest, journalist David Farrier visits unusual -- and often macabre -- tourism spots around the world.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTVe5RbE5gFRQ44v0ke8BE5SsWSIIFz9gJRVy7S6Yvi9OroRRhFo8Fk1fYg6Je-CdeuHAd_CT1fI8Gr-g-jo4NbwuLTILLG-SuU3HYmRr8XoIG-8ha5z9_OYla0vu8KIe6Wl.jpg?r=5dd",
                preview: "https://youtu.be/8vV1xaLCONw",
            },
    
            {
                id: "realStories",
                title: "Untold - The Race of the Century",
                genre: "Documentary Films, Sports Movies",
                comingSoon: false,
                availDate: 2022,
                description: "The Australia II yacht crew looks back on the motivation, dedication and innovation that led to their historic victory at the 1983 America's Cup.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfwzf65eDiphLZYcpjbbS3Lb6mMgzOv528kuO4PxUzLzWkXvK6zY0nOZnMHtqjzpRtmHQEvbiz13nfqFWAaUrrs_v6eb_oAMgZfKuQE9Q3NM2rAQkKl1S6JIujXlnFKojafK.jpg?r=51b",
                preview: "https://youtu.be/PSmns9QWPiE",
            },
    
            {
                id: "foodWine",
                title: "Heavenly Bites Mexico",
                genre: "Social & Cultural Docs, Docuseries, Mexican",
                comingSoon: false,
                availDate: 2022,
                description: "Can you imagine adding lime, candy, seafood and even meat to your beer? Mexicans certainly do, and the result is an addictive drink called michelada",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbItvuqbSXeRBI3YlnYqgzKvgD3wFeCPeFMIlBSQGqWGxxdQoSBdmTgsRBD0v1lhDTnF4jYEqn_HsZwOSggmVbu1Sx_TziaoiXP8ktr3vhwaaiW0KC1UtweFdtQpQsBdxNFe.jpg?r=6e5",
                preview: "https://youtu.be/6V9AkCnvyVQ",
            },

            {
                id: "foodWine",
                title: "K Food Show, a Nation of Broth",
                genre: "Social & Cultural Docs, Docuseries, Korean",
                comingSoon: false,
                availDate: 2022,
                description: "A humble bowl of good soup sits at the heart of every Korean table. Take off on a journey that explores the history and evolution of korean soup.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbZF0ULJjIRtcd2YkV1G04v4-MRVD1lrJEESyHflJXKShXC8MgdmEGANtNPzytMA9Qntvk8_lRTBSRtEdeFzT7pewyqCJfepgbU.webp?r=45a",
                preview: "https://youtu.be/eI_LjETc_Ak",
            },

            {
                id: "foodWine",
                title: "Salt Fat Acid Heat",
                genre: "Docuseries, Travel & Adventure Documentaries, TV Shows Based on Books",
                comingSoon: false,
                availDate: 2018,
                description: "Chef and food writer Samin Nosrat travels the world to explore four basic keys to wonderful cooking, serving up feasts and helpful tips along the way.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfdVMCf4lEhKNdDVllvaIYin9IDBTs7f5Onc3skn0YAkHNZaMfA-jwULrHRKOtXWN6wvhlTMtGtZwi3EmpMzSjpnVfZmUPJDIG6xpbvT3earR2HEmMzZm2ok6wa6OAInAbSI.jpg?r=e7d",
                preview: "https://youtu.be/2oKbs4jAf7M",
            },

            {
                id: "foodWine",
                title: "The Game Changers",
                genre: "Documentary Films, Food & Travel TV, Lifestyle",
                comingSoon: false,
                availDate: 2018,
                description: "Meeting visionary scientists and top athletes, a UFC fighter embarks on a quest to find the optimal diet for human performance and health.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTcwYoX3D2DSSx9bzDlDbtFghOus8bZw9EnWaijV0xJ1xP2Aar7tVNODOHde-5ASq8XmZLs1yUSl8TiSiK4o-TV70NJKtVLITeA.webp?r=93b",
                preview: "https://youtu.be/iSpglxHTJVM",
            },

            {
                id: "foodWine",
                title: "Down to Earth with Zac Efron",
                genre: "Docuseries, Travel & Adventure Documentaries, Science & Nature Docs",
                comingSoon: false,
                availDate: 2020,
                description: "Actor Zac Efron journeys around the world with wellness expert Darin Olien in a travel show that explores healthy, sustainable ways to live.",
                image: "https://occ-0-4305-34.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSEfoVDNmscbTvwUks_XUnZnDNAVGl2098UYnfZCUpRdwzieTxMYvlE83HOs3IxZ8GiCbSHWoNWBDcdLPIhM71jPhLhwEWrmr5INH9sRY1MFZZPUJibtbZk1Uz7UD3rQHFKG.jpg?r=776",
                preview: "https://youtu.be/oMzYiY5wcHU",
            },

            {
                id: "comingSoon",
                title: "Avatar: The Way of Water",
                genre: "Sci-fi, Adventure",
                comingSoon: true,
                availDate: 2023,
                description: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.",
                image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4LOBdltP7rNDmLqOn9_Ak2lTNbmWP8K8-4RHSb5m6j2UyBw-p",
                preview: "https://youtu.be/jOHCmLUng-Q",
            },

            {
                id: "comingSoon",
                title: "Amsterdam",
                genre: "Drama, Mystery",
                comingSoon: true,
                availDate: 2023,
                description: "Set in the '30s, it follows three friends who witness a murder, become suspects themselves, and uncover one of the most outrageous plots in American history.",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZ2-VK1Z_lCgH8JOGtL9AI9tGP7ql01IRkYoEBSMKH6DwfaRG",
                preview: "https://youtu.be/GLs2xxM0e78",
            },

            {
                id: "comingSoon",
                title: "John Wick Chapter 4",
                genre: "Action, Thriller",
                comingSoon: true,
                availDate: 2023,
                description: "John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Osaka to Berlin. Lionsgate presents, a Thunder Road Films / 87eleven production.",
                image: "https://m.media-amazon.com/images/M/MV5BOTI1MDA5OTEtNWExMi00NGYwLThmMjUtMDhmNDQ4YTg1NzZlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UY281_CR11,0,190,281_.jpg",
                preview: "https://youtu.be/27EF723ZDmI",
            },

            {
                id: "comingSoon",
                title: "Ticket to Paradise",
                genre: "Romance, Comedy",
                comingSoon: true,
                availDate: 2023,
                description: "A divorced couple that teams up and travels to Bali to stop their daughter from making the same mistake they think they made 25 years ago.",
                image: "https://m.media-amazon.com/images/M/MV5BMWE0MmEwMWUtZjRjOC00YzE3LWI2MjctNjc3NWQ0YTVmNDQ4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
                preview: "https://youtu.be/hkP4tVTdsz8",
            },

            {
                id: "comingSoon",
                title: "Puss in Boots: The Last Wish",
                genre: "Comedy, Animation",
                comingSoon: true,
                availDate: 2023,
                description: "Puss in Boots discovers that his passion for adventure has taken its toll: he has burned through eight of his nine lives. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
                image: "https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-the-last-wish-poster-thumbnail2.jpg",
                preview: "https://youtu.be/xgZLXyqbYOc",
            },
        ],
    },

        computed: {
            moviesComingSoonFilter() {
                let moviesComingSoonFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("comingSoon".toLowerCase());
            });
            return moviesComingSoonFilter;
            },

            trendingNowFilter() {
                let trendingNowFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("trendingNow".toLowerCase());
                });
                return trendingNowFilter;
            },

            documentariesFilter() {
                let documentariesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("documentaries".toLowerCase());
                });
                return documentariesFilter;
            },

            comedyMoviesFilter() {
                let comedyMoviesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("comedies".toLowerCase());
                });
                return comedyMoviesFilter;
            },

            realStoriesFilter() {
                let realStoriesFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("realStories".toLowerCase());
                });
                return realStoriesFilter;
            },

            foodWineFilter() {
                let foodWineFilter = this.movies.filter((movie) => {
                    return movie.id.toLowerCase().includes("foodWine".toLowerCase());
                });
                return foodWineFilter;
            },   
        },

        methods: {
            theSearch() {
                let input = getElementById("searchBox").value;
                if (input == "id") {
                    return "id";
                } else {
                    alert("Please search another title, category or genre");
                }
            },

            addingToWatchList(event) {
                let watchlist = JSON.parse(localStorage.getItem("movies"));
                for (let i = 0; i < watchlist.length; i++) {
                    if (watchlist[i].title == event.title) {
                        this.list = true;
                    } else {
                        this.list = false;
                    }
                }

                if (this.list == true) {
                } else {
                if (watchlist.length < 20) {
                    watchlist.push(event);

                    localStorage.setItem("movies", JSON.stringify(watchlist));
                } else if (watchlist.length >= 20) {
                    this.completeList = true;
                    alert("Your list is full, eiter have some fun and watch it all or you'll have to delete some, sorry!");
                }
            }
        },
    },
})
