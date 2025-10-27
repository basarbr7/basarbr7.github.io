// data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
    {
    id: 1,
    title: "ToDo Application",
    description: "Full-stack ToDo application",
    image: "/todo.png",
    link: "https://todo-app-full-stack-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Front End Weather application",
    image: "/weather.png",
    link: "https://weather-app-amber-six-72.vercel.app",
  },
  {
    id: 3,
    title: "E-commerce Store",
    description: "Front End E-Commerce application",
    image: "/ecomerce.png",
    link: "https://e-commerce-ruby-eight.vercel.app/",
  },

  {
    id: 4,
    title: "Music Player",
    description: "Front End Music player",
    image: "/music.png",
    link: "https://music-app-player-sandy.vercel.app/",
  },
  {
    id: 5,
    title: "Animated Clock",
    description: "Front End",
    image: "/clock.png",
    link: "https://animated-clock-mocha.vercel.app/",
  },
  {
    id: 6,
    title: "Block Graph",
    description: "Front End",
    image: "/block.png",
    link: "https://block-grap.vercel.app/",
  },
  {
    id: 7,
    title: "Sales Ai Agency",
    description: "Front End",
    image: "/salesAgency.png",
    link: "https://sales-rank-agency.vercel.app/",
  },
  {
    id: 8,
    title: "Agency",
    description: "Front End",
    image: "/agency.png",
    link: "https://agence-sage.vercel.app/",
  },
  
];
