export interface SEO {
   
    id: number;
    key_words: string; 
    link: string; 
    description: string; 
    page_id: Page; 

}
export interface Page {
    id: number;
    title: string; 
    link: string; 
    content: string; 
    to_menu: number; 
    order: string; 

}