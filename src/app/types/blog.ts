export interface Blog {
  category: string;
  publishedDate: string;
  title: string;
  description: string;
  author: string;
}

export const exampleBlogCard: Blog = {
  category: 'Learning',
  publishedDate: '21 Dec 2023',
  title: 'HTML & CSS foundations',
  description:
    'These languages are the backbone of every website, defining structure, content, and presentation.',
  author: 'Greg Hooper',
};
