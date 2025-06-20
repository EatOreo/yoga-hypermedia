// Class entity matching the table stored in the db
export interface ClassItem {
  id: number
  title: string
  subtitle: string
  intensity: string
  image: string
  description: string
  schedule: string
  teacherId: number
  price: string
}