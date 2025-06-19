// Teacher entity matching the table stored in the db
export interface TeacherItem {
  id: number
  name: string
  image: string //link to image
  description: string // ~200 words about proffesional experiene
  email: string
  quote: string // personal quote they teach
  gender: string
}