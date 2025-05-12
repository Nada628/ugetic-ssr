export interface Client {
    id: number;
    clientName: string;
    logo: File | string | null;
    description: string;
    link: string;
  }

  export interface Service {
    id: number;
    name: string;
    image: File | string | null;
    content: string;
    short_description: string;
    link: string;
  }

  export interface Social {
    id: number;
    name: string;
    icon: File | string | null;
    link: string;
  }
  export interface Page {
    id: number;
    title: string; 
    link: string; 
    content: string; 
    to_menu: number; 
    order: string; 

  }
  
  export interface Contact {
   
    id: number;
    name: string; 
    email: string; 
    company: string; 
    message: string; 

  }
 

  export interface PrivacySection {
    id: string;
    title: string;
    content: string;
    listItems?: string[];
  }

  export interface usageSection {
    id: string;
    title: string;
    content: string;
    listItems?: string[];
  }

  export interface reviews {
    id: string;
    name: string;
    photo: File;
    review: string;
    review_link: string;
    referance: string;
 
  }

  export interface Faq {
    question: string;
    answer: string;
    question_user: string;
  }
  
  export interface FaqCategory {
    id: number;
    name: string;
    cat_user: string;
    questionAndAnswer: Faq[];
  }
  
  export interface FaqResponse {
    data: FaqCategory[];
  }
  
  
  