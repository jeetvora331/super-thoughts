
### A Twitter clone project aims to create a social media platform that functions similarly to Twitter, allowing users to create an account, post short messages (tweets) up to a specific character limit, and engage with other's content through likes and comments.

### The project typically involves front-end development, back-end development, database design, and security considerations to ensure the platform is reliable, scalable, and user-friendly.

#### Project Overview:

- A social media platform similar to Twitter where users can log in, create posts up to 300 characters, and interact with other users' posts.
- Features include liking posts, editing or deleting your own posts, and Google authentication for user login.
- Backend was created using Firebase real-time database, while the frontend was built with Next JS framework and Tailwind CSS for styling.
- React Toastify was used for notifications, and a character limit of 300 words was enforced with user feedback provided.

#### Technology Stack:

- Firebase real-time database: a NoSQL database used for data storage and synchronization, allowing for real-time updates and changes.
- Next JS framework: a React-based framework for building server-rendered applications, providing a fast and scalable development experience.
- Google authentication with Firebase: allowing for secure user authentication and authorization.
- Tailwind CSS: a utility-first CSS framework for quickly styling and designing responsive web applications.
- React Toastify: a notification library for React applications, providing customizable and user-friendly notifications.

#### Functionality:

- Posting: users can create posts up to 300 characters in length, with UI feedback if the limit is exceeded.
- Liking: users can like other users' posts, with like counts stored in the Firebase real-time object.
- Editing/Deleting: users can edit or delete their own posts, providing control and flexibility over their content.
- Commenting: Engage with other posts via commenting your thoughts.

Overall, your project has implemented several key features found in popular social media platforms like Twitter, while leveraging modern and scalable technologies like Firebase real-time database and Next JS framework.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
