export interface TechStack {
  name: string
}

export interface Skill {
  name: string
}
export interface Project {
  id: number
  title: string
  description: string
  live_url: string
  github_url: string
  image: string
  tech_stack: TechStack[]
}

export interface AboutMe {
  name: string
  headline: string
  bio: string
  profile_picture: string
  skills?: Skill[]
}

export interface Greetings {
  id?: number
  username: string
  title: string
  subtitle: string
  resume_link: string
  display: boolean
}
