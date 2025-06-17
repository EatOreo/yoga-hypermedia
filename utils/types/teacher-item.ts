export interface TeacherItem {
  id: number
  name: string
  image: string //link to image
  description: string // ~200 words about proffesional experiene
  email: string
  quote: string // personal quote they teach
  gender: string
}

export const allTeachers: TeacherItem[] = [
  {
    id: 1,
    name: "Anjali Sharma",
    image: "/yoga-hypermedia/images/teacher_1.jpg",
    description: "Anjali has over 15 years of experience teaching Hatha and Vinyasa yoga. She is known for her compassionate approach and deep understanding of yogic philosophy. Anjali has trained in India and Europe, and her classes focus on alignment, breath, and mindfulness. She believes in making yoga accessible to everyone, regardless of age or ability.",
    email: "anjali.sharma@yogastudio.com",
    quote: "Yoga is the journey of the self, through the self, to the self.",
    gender: "female",
  },
  {
    id: 2,
    name: "David Kim",
    image: "/yoga-hypermedia/images/teacher_2.jpg",
    description: "David specializes in Ashtanga and Power Yoga, bringing energy and motivation to every class. With a background in sports science, he integrates anatomy and movement principles into his teaching. David encourages students to challenge themselves while respecting their limits.",
    email: "david.kim@yogastudio.com",
    quote: "Strength and flexibility are not opposites, but partners on the mat.",
    gender: "male",
  },
  {
    id: 3,
    name: "Priya Patel",
    image: "/yoga-hypermedia/images/teacher_3.jpg",
    description: "Priya is a certified prenatal and restorative yoga instructor. Her gentle classes are designed to nurture both body and mind. Priya's teaching is informed by her studies in Ayurveda and holistic wellness, and she is passionate about supporting women through all stages of life.",
    email: "priya.patel@yogastudio.com",
    quote: "Listen to your body; it always knows what you need.",
    gender: "female",
  },
  {
    id: 4,
    name: "Liam OConnor",
    image: "/yoga-hypermedia/images/teacher_4.jpg",
    description: "Liam brings a playful spirit to his Vinyasa Flow and Yin Yoga classes. He has taught internationally and is known for his creative sequencing and uplifting playlists. Liam believes yoga is a tool for self-discovery and joy.",
    email: "liam.oconnor@yogastudio.com",
    quote: "Find joy in the journey, not just the destination.",
    gender: "male",
  },
  {
    id: 5,
    name: "Sofia Rossi",
    image: "/yoga-hypermedia/images/teacher_5.jpg",
    description: "Sofia is passionate about mindfulness and meditation, weaving these practices into her Hatha and Gentle Yoga classes. She has a background in psychology and uses yoga as a means to foster mental well-being and resilience.",
    email: "sofia.rossi@yogastudio.com",
    quote: "Breathe deeply, live fully.",
    gender: "female",
  },
  {
    id: 6,
    name: "Mateo Garcia",
    image: "/yoga-hypermedia/images/teacher_6.jpg",
    description: "Mateo teaches Kundalini and Breathwork classes, focusing on energy and transformation. He has studied with renowned teachers in South America and brings a unique perspective to his sessions. Mateo's classes are both challenging and deeply restorative.",
    email: "mateo.garcia@yogastudio.com",
    quote: "Transformation begins with a single breath.",
    gender: "male",
  }
];