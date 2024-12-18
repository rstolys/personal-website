import { Accommodation, Activity, Restaurant } from "./TripContext";

export const accommodationOptions: Accommodation[] = [
    { 
      name: "Beachfront Bungalow", 
      description: "A cozy bungalow right on the beach",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/beachfront-bungalow"
    },
    { 
      name: "Hilltop Villa", 
      description: "A spacious villa with panoramic island views",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/hilltop-villa"
    },
    { 
      name: "Eco-Lodge", 
      description: "An environmentally friendly lodge in the heart of nature",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/eco-lodge"
    },
  ];

export const activityOptions: Activity[] = [
    { 
        name: "Snorkeling", 
        description: "Explore the vibrant coral reefs",
        imageUrl: "/placeholder.svg?height=200&width=300",
        externalLink: "https://example.com/snorkeling"
    },
    { 
        name: "Hiking", 
        description: "Trek through lush tropical forests",
        imageUrl: "/placeholder.svg?height=200&width=300",
        externalLink: "https://example.com/hiking"
    },
    { 
        name: "Beach Yoga", 
        description: "Relax with yoga sessions on the beach",
        imageUrl: "/placeholder.svg?height=200&width=300",
        externalLink: "https://example.com/beach-yoga"
    },
    { 
        name: "Kayaking", 
        description: "Paddle through crystal-clear waters",
        imageUrl: "/placeholder.svg?height=200&width=300",
        externalLink: "https://example.com/kayaking"
    },
];

export const restaurantOptions: Restaurant[] = [
    { 
      name: "Seaside Grill", 
      cuisine: "Seafood",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/seaside-grill"
    },
    { 
      name: "Tropical Flavors", 
      cuisine: "Local Cuisine",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/tropical-flavors"
    },
    { 
      name: "Green Oasis", 
      cuisine: "Vegetarian",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/green-oasis"
    },
    { 
      name: "Sunset Lounge", 
      cuisine: "International",
      imageUrl: "/placeholder.svg?height=200&width=300",
      externalLink: "https://example.com/sunset-lounge"
    },
  ];