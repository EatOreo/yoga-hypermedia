// Class entity matching the table stored in the db
export interface EventItem {
  title: string;
  type: 'workshop' | 'retreat' | 'community';
  date: string;
  duration: string;
  description: string;
  image: string;
  // Optional fields for the details page
  longDescription?: string;
  detailsImage?: string;
  location?: string;
  price?: string;
  whoIsThisFor?: string;
  inquiries?: {
    "email": string;
    "phone": string;
  };
  teacherIds?: number[];
  id: number; 
  highlighted: boolean;
}

export function getAllEventItems(): EventItem[] {
  return [
  {
    "title": "Mindfulness Workshop",
    "type": "workshop",
    "duration": "5:00 PM - 8:00 PM",
    "description": "Learn how to master your mind!",
    "image": "/yoga-hypermedia/images/mindfulness.png",
    "longDescription": "In this 3-hour immersive workshop, Sofia Rossi will guide you through the core principles of mindfulness. You will learn practical techniques to reduce stress, improve focus, and cultivate a deeper sense of presence in your daily life. The session includes guided meditations, gentle mindful movement, and group discussion.",
    "detailsImage": "/yoga-hypermedia/images/mindfulness.png",
    "location": "Yogaga Studio - Main Hall",
    "price": "€75",
    "whoIsThisFor": "Anyone looking to reduce stress and cultivate inner peace. No prior meditation experience is needed.",
    "id": 4,
    "inquiries": {
      "email": "retreats@yogaga.com",
      "phone": "+39 547 999 4567"
    },
    "teacherIds": [
      5
    ],
    "highlighted": false,
    "date": "2025-08-06"
  },
  {
    "title": "Beach Yoga",
    "type": "community",
    "duration": "2:00 PM - 3:30 PM",
    "description": "Join us for a relaxing beach yoga session and connect with nature.",
    "image": "/yoga-hypermedia/images/beach.png",
    "longDescription": "Feel the sand between your toes and the ocean breeze on your skin as you flow through a gentle yoga sequence led by Priya Patel. This is a wonderful opportunity to connect with nature, soak up the sun, and share a peaceful practice with our amazing community. All levels are welcome!",
    "detailsImage": "/yoga-hypermedia/images/beach.png",
    "location": "City Beach (next to the main pier)",
    "price": "Free",
    "whoIsThisFor": "Everyone! A perfect way to spend a summer afternoon.",
    "id": 1,
    "inquiries": {
      "email": "retreats@yogaga.com",
      "phone": "+39 347 123 4567"
    },
    "teacherIds": [
      3
    ],
    "highlighted": true,
    "date": "2025-07-12"
  },
  {
    "title": "Make Tikka!",
    "type": "community",
    "duration": "7:00 PM onwards",
    "description": "Invite your friends and family and join us at the center for some delicious tikka!",
    "image": "/yoga-hypermedia/images/tikka.png",
    "longDescription": "Food brings us together! As a thank you to our wonderful community, we're hosting a free dinner at the studio. Come and enjoy delicious, home-made chicken and paneer tikka, connect with fellow yogis, and share an evening of good food and great company.",
    "detailsImage": "/yoga-hypermedia/images/tikka.png",
    "location": "Yogaga Studio",
    "price": "Free for all members",
    "whoIsThisFor": "Everyone in our community! Bring your friends and family.",
    "id": 3,
    "inquiries": {
      "email": "workshops@yogaga.com",
      "phone": "+39 347 123 4567"
    },
    "teacherIds": [],
    "highlighted": false,
    "date": "2025-08-04"
  },
  {
    "title": "Goat Yoga Retreat",
    "type": "retreat",
    "duration": "3 Days",
    "description": "Join us for a 3-day goat yoga retreat in the mountains! Experience the joy of yoga with our friendly goats.",
    "image": "/yoga-hypermedia/images/goat.png",
    "longDescription": "Yes, you read that right! Join us for a weekend of yoga, laughter, and adorable goats. A truly unforgettable experience that combines the benefits of yoga with the therapeutic joy of animal interaction. This all-inclusive retreat is perfect for anyone looking to de-stress and have a lot of fun.",
    "detailsImage": "/yoga-hypermedia/images/goat.png",
    "location": "Sunny Meadows Farm",
    "price": "€750",
    "whoIsThisFor": "Animal lovers and yogis of all levels looking for a fun and unique experience.",
    "id": 2,
    "inquiries": {
      "email": "hello@yogaga.com",
      "phone": "+39 347 123 4567"
    },
    "teacherIds": [
      4
    ],
    "highlighted": true,
    "date": "2025-09-01"
  },
  {
    "title": "Mountain Yoga Retreat",
    "type": "retreat",
    "duration": "2 Days",
    "description": "Immerse yourself in a transformative 2-day retreat in the mountains.",
    "image": "/yoga-hypermedia/images/retreat.png",
    "longDescription": "Immerse yourself in a transformative 2-day retreat in the tranquil mountains. Discover deeper yoga practice, guided meditation, nature hikes, nourishing meals, and community connection—all in a breathtaking natural setting.",
    "detailsImage": "/yoga-hypermedia/images/retreat.png",
    "location": "Alta Via 1, The Dolomites",
    "price": "€1.450 (All-inclusive)",
    "whoIsThisFor": "Open to all levels - ideal for yogis seeking rejuvenation, nature connection, and mindful community.",
    "id": 5,
    "inquiries": {
      "email": "hello@yogaga.com",
      "phone": "+39 777 123 1234"
    },
    "teacherIds": [
      1,
      4,
      5
    ],
    "highlighted": false,
    "date": "2025-07-22"
  },
  {
    "title": "Plane Yoga",
    "type": "community",
    "duration": "6:00 PM",
    "description": "Experience yoga at 30,000 feet! Join us for a unique in-flight yoga session.",
    "image": "/yoga-hypermedia/images/plane.png",
    "longDescription": "Prepare for takeoff! In a unique partnership with 'Air Yogaga', we're offering a one-of-a-kind yoga session at 30,000 feet. This is an exclusive, invite-only event for our most dedicated members. Stretch out in a specially chartered aircraft and find your inner peace above the clouds.",
    "detailsImage": "/yoga-hypermedia/images/plane.png",
    "location": "Departing from Milan Linate Airport",
    "price": "Invite-only",
    "whoIsThisFor": "Our most dedicated members. Invitations will be sent via email.",
    "id": 6,
    "inquiries": {
      "email": "fly@yogaga.com",
      "phone": "+39 347 123 4567"
    },
    "teacherIds": [
      6
    ],
    "highlighted": true,
    "date": "2025-10-22"
  }
]
}