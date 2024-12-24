import { Accommodation, Activity, Restaurant } from "./TripContext";

export const accommodationOptions: Accommodation[] = [
    { 
      name: "Oasis in the Cedars", 
      description: "Tiny home in Gibsons under a canopy of cedars.",
      imageUrl: "/accomodation-images/OasisInCedars.avif",
      externalLink: "https://www.airbnb.ca/rooms/1154295766077160658?adults=2&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-16&source_impression_id=p3_1735013399_P39MsszXb750oMll&previous_page_section_name=1000&federated_search_id=7a75b135-b8e3-4ec7-a50d-518b274e054e"
    },
    { 
      name: "Shanty on Reed", 
      description: "Micro cabin located in Upper Gibsons. Super funky, laid back feel",
      imageUrl: "/accomodation-images/ShantyOnReed.avif",
      externalLink: "https://www.airbnb.ca/rooms/860216763160315069?adults=2&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-16&source_impression_id=p3_1735013346_P3cpUK2agRKMQZ7Z&previous_page_section_name=1000&federated_search_id=7a75b135-b8e3-4ec7-a50d-518b274e054e"
    },
    { 
      name: "The Apple Room", 
      description: "Private bedroom with a gas fireplace in a family home.",
      imageUrl: "/accomodation-images/TheAppleRoom.avif",
      externalLink: "https://www.airbnb.ca/rooms/37367317?adults=2&category_tag=Tag%3A8678&enable_m3_private_room=true&location=Gibson%20Island%2C%20North%20Coast%2C%20BC%2C%20Canada&photo_id=854257262&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-15&source_impression_id=p3_1734839221_P34OcJIRpg5bxEp6&previous_page_section_name=1001&federated_search_id=0593ca93-595d-4cd9-ab37-7e81c0ad2e28"
    },
    { 
      name: "Hidden Creek Hideaway", 
      description: "Guest bedroom with rustic charm. Located in Roberts Creek",
      imageUrl: "/accomodation-images/HiddenCreekHideaway.jpeg",
      externalLink: "https://www.airbnb.ca/rooms/1161806751609783321?adults=2&category_tag=Tag%3A8678&enable_m3_private_room=true&location=Gibson%20Island%2C%20North%20Coast%2C%20BC%2C%20Canada&photo_id=1912516802&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-15&source_impression_id=p3_1734839140_P3MupefApgyaO_6Q&previous_page_section_name=1001&federated_search_id=7cfc45a5-ee07-49db-aa36-f3dccd17b508"
    },
    {
      name: "Gingers Garden Room",
      description: "A cozy beach house with a private beach",
      imageUrl: "/accomodation-images/GingersGuestGardenRoom.jpeg",
      externalLink: "https://www.airbnb.ca/rooms/782617528980319262?adults=2&location=Gibson%20Island%2C%20North%20Coast%2C%20BC%2C%20Canada&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-15&source_impression_id=p3_1734840680_P3cqoVlET4xMLjLZ&previous_page_section_name=1001&federated_search_id=22fc51f5-4cff-4c40-a7aa-abe9451ce5a7"
    },
    {
      name: "Travellers Sanctuary",
      description: "Entire home near Mt. Washington. Located in Comox",
      imageUrl: "/accomodation-images/TravellersSantuarySki.avif",
      externalLink: "https://www.airbnb.ca/rooms/1024872444236833706?adults=2&location=Gibson%20Island%2C%20North%20Coast%2C%20BC%2C%20Canada&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-15&source_impression_id=p3_1734841020_P32uiUVdahLxfWQz&previous_page_section_name=1001&federated_search_id=be7fcbe0-2959-4ddc-8961-9f9b57d151a5"
    },
    {
      name: "The Nook",
      description: "Guest suite on one acre property. Located in Courtenay",
      imageUrl: "/accomodation-images/TheNook.avif",
      externalLink: "https://www.airbnb.ca/rooms/35649803?adults=2&location=Gibson%20Island%2C%20North%20Coast%2C%20BC%2C%20Canada&search_mode=regular_search&check_in=2025-02-14&check_out=2025-02-15&source_impression_id=p3_1734842081_P3YLoahVF7ZM06xE&previous_page_section_name=1001&federated_search_id=7a152159-ec6d-4bfa-a1de-1ce9690d5dba"
    },
    {
      name: "Ryan / Riley House",
      description: "Cozy bed with the bestest company in a familar location.",
      imageUrl: "/accomodation-images/GirlHouse.jpeg",
      externalLink: "https://www.linkedin.com/in/ryan-stolys/"
    }
  ];

export const activityOptions: Activity[] = [
    { 
      name: "Tidepools Aquarium", 
      description: "Local aquarium in interactive exibits. Open 10am - 4pm",
      imageUrl: "/activity-images/Tidepools.jpg",
      externalLink: "https://tidepoolsaquarium.org"
    },
    { 
      name: "Sunshine Cost Museum", 
      description: "Gibsons local museum. Open 10:30 - 4:30 on Saturday",
      imageUrl: "/activity-images/SunshineCoastMuseum.jpg",
      externalLink: "https://www.sunshinecoastmuseum.ca"
    },
    { 
      name: "Gibsons Public Market", 
      description: "Gibsons public market. Community gathering place. Open 10am - 5pm",
      imageUrl: "/activity-images/GibsonsMarket.jpeg",
      externalLink: "https://www.sunshinecoastmuseum.ca"
    },
    { 
      name: "Hike in Garden Bay", 
      description: "5k hike, moderate difficulty with potentially nice views",
      imageUrl: "/activity-images/HikeInGardenBay.webp",
      externalLink: "https://www.alltrails.com/trail/canada/british-columbia/mount-daniel--2"
    },
    { 
      name: "Hike in Gibsons", 
      description: "Multiple options. Easy to difficult. Beautiful views. 15k hike linked",
      imageUrl: "/activity-images/HikeInGibsons.webp",
      externalLink: "https://www.alltrails.com/explore/trail/canada/british-columbia/mount-elphinstone-via-dakota-creek?u=i"
    },
    { 
      name: "Run through Gibsons", 
      description: "Running on vibes or through the main town.",
      imageUrl: "/activity-images/RunThroughGibsons.jpeg",
      externalLink: "https://www.google.com/maps/place/Gibsons,+BC/@49.3977586,-123.53631,14z/data=!3m1!4b1!4m6!3m5!1s0x54863fc5c7baa93d:0xec55508fba6a002d!8m2!3d49.3974171!4d-123.5152222!16zL20vMDI5bGdx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    },
    { 
      name: "Card Game / Uno", 
      description: "Participation in optional, tears (for Riley) are likely",
      imageUrl: "/activity-images/UnoGame.jpg",
      externalLink: "https://www.unorules.com"
    },
    { 
      name: "Chill Time + Relaxing", 
      description: "Reading, hanging out and fun chats. Any duration",
      imageUrl: "/activity-images/ChillTimeReading.webp",
      externalLink: "https://www.unorules.com"
    },
    { 
      name: "40 Knots Winery", 
      description: "Nice looking winery with fun vibes. In Comox.",
      imageUrl: "/activity-images/40KnotsWinery.png",
      externalLink: "https://www.40knotswinery.com"
    },
    { 
      name: "Comox Valley Farmers Market", 
      description: "Friendly farmers market. Open 9am - 1pm on Saturdays",
      imageUrl: "/activity-images/ComoxFarmersMarket.jpg",
      externalLink: "https://cvfm.ca"
    },
    { 
      name: "Old Country Market", 
      description: "They have goats on the roof. Open 9am - 6pm",
      imageUrl: "/activity-images/OldCountryMarket.jpg",
      externalLink: "https://oldcountrymarket.com"
    },
];

export const restaurantOptions: Restaurant[] = [
    { 
      name: "Blackfish Pub", 
      cuisine: "Pub style food. 10am-11pm",
      imageUrl: "/restaurant-images/BlackfishPub.jpeg",
      externalLink: "https://www.blackfishpub.com"
    },
    { 
      name: "Mad Hen", 
      cuisine: "Diner style food. 10am-3pm",
      imageUrl: "/restaurant-images/MadHen.jpg",
      externalLink: "https://www.themadhen.ca"
    },
    { 
      name: "Sheer Bliss cafe", 
      cuisine: "Bakery + Cafe",
      imageUrl: "/restaurant-images/SheerBlissCafe.jpg",
      externalLink: "https://www.tripadvisor.ca/Restaurant_Review-g182206-d3223436-Reviews-Sheer_Bliss_Bakery_Cafe-Gibsons_Sunshine_Coast_British_Columbia.html"
    },
    { 
      name: "Cafe in Garden Bay", 
      cuisine: "Garden Bay Cafe. 9am - 3:30pm",
      imageUrl: "/restaurant-images/GardenBayCafe.jpg",
      externalLink: "https://www.johnhenrys.ca/wp-content/uploads/2023/05/JH-Cafe-Menu-2023-Final.pdf"
    },
    { 
      name: "Breakfast at Residence", 
      cuisine: "Cozy + Fun",
      imageUrl: "/restaurant-images/BreakfastMeal.jpg",
      externalLink: "https://www.recipetineats.com/category/breakfast-recipes/"
    },
    { 
      name: "Lunch at Residence", 
      cuisine: "Or on the go",
      imageUrl: "/restaurant-images/LunchMeal.avif",
      externalLink: "https://www.allrecipes.com/recipes/17561/lunch/"
    },
    { 
      name: "Dinner at Residence", 
      cuisine: "Cooking together",
      imageUrl: "/restaurant-images/DinnerMeal.webp",
      externalLink: "https://www.allrecipes.com/recipes/17562/dinner/"
    },
    { 
      name: "40 Knots Winery", 
      cuisine: "Comox winery with fun vibes.",
      imageUrl: "/restaurant-images/40KnotsWinery.png",
      externalLink: "https://www.40knotswinery.com"
    },
    { 
      name: "Sushi Wara", 
      cuisine: "Sushi in Fishing Town (Comox).",
      imageUrl: "/restaurant-images/SushiWara.jpg",
      externalLink: "https://sushiwaracomox.ca"
    },
    { 
      name: "Martines Bistro", 
      cuisine: "Delicious local food (in Comox).",
      imageUrl: "/restaurant-images/MartinesBistro.jpg",
      externalLink: "https://www.martinesbistro.com"
    },
  ];