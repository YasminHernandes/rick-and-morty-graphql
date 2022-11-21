 export type Characters = {
  results: Character[]
 }

 export type Character = {
  id: string,
  name: string,
  image: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: Location,
  location: Location,
 }

 export type Location = {
    id: string
    name: string
    type: string
    dimension: string
 }