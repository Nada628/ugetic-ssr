export interface Category {
    id: number;
    name: string;
  
  }
export interface Subjects {
    id: number;
    title: string;
    content: string;
    keywords: string;
    description: string;
    created_at: string;
    author: string,
    image: string;
    comments:string;
    category: Category
    
  }
  export interface Comment {
    id: number;
    user_name: string;
    subject: string;
    content: string;    // content of the comment
    date: string;      
    
    
  }