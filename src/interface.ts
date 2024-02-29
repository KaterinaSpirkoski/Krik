export interface VolunerCardProps {
  id: string;
  name: string;
  info: string;
  image: string;
  description: string;
  projects: NewsProps[];
}

export interface AboutProps {
  img: string;
  description: string;
  title: string;
  second_title: string;
  first_pretitle: string;
  first_content: string;
  second_pretitle: string;
  second_content: string;
  thirt_pretitle: string;
  third_content: string;
}

export interface ServicesProps {
  title: string;
  description: string;
  image_first: string;
  image_second: string;
  image_third: string;
  image_fourth: string;
  image_fifth: string;
}

export interface TeamDataProps {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  linkedin: string;
}
export interface ProjectsProps {
  img_one: string;
  img_two: string;
  img_three: string;
  img_four: string;
}
export interface NewsLetterProps {
  id: string;
  img: string;
  date: string;
  description: string;
}

export interface NewsProps {
  id: string;
  image: string;
  date: string;
  description: string;
  title: string;
  moreInfo: string;
  rating: string;
  name: string;
  isTopRated: boolean;
}

export interface PartnersProps {
  id: string;
  image: string;
  name: string;
}

export interface UpcomingProps {
  id: string;
  name: string;
  desc: string;
  place: string;
  date: string;
  img: string;
  month: string;
}
export interface OurServicesProps {
  id: string;
  description: string;
  title: string;
  redirecting: string;
}
export interface ProjectsDataProps {
  id: string;
  name: string;
  img: string;
  status: string;
  progress: string;
  description: string;
  goals: string;
  intendedFor: string;
  image_second: string;
}

export interface DocumentsProps {
  id: string;
  title: string;
  description: string;
  year: string;
}

export interface ProductsProps {
  id: string;
  name: string;
  material: string;
  price: string;
  image: string;
  image_second: string;
  image_third: string;
  description: string;
}
