// Blog entity matching the table stored in the db
export interface BlogItem {
  id: number
  title: string
  date: string
  body: string
  author: number
  image: string
  teaser: string
}