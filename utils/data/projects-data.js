import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'PackRat Travel Management App',
        description: 'I have worked as a Remote Full Stack Developer in this web app which is basically from a USA based Company. I created and managed the UI and created Server routes also. The app works everywhere in Europe and comes with an app for both IOS and Android.',
        tools: ['NextJS', 'Tailwind CSS', "Google Maps", "Vite Js", "TypeScript", 'React Native', "MySQL", "TRPC", "Tamagui", "Google Auth", "Express", "Drizzle", "Swagger"],
        role: 'Software Engineer',
        code: 'https://github.com/MuhammadHassan03/PackRat',
        demo: 'https://packrat.world/',
        image: crefin,
    },
    {
        id: 2,
        name: 'Chat App with Socket.IO',
        description: "Me built an Chat App with Socket.IO web application. I have developed API using Express and MongoDB. Used JWT for User Authentication for the authentication system. Built UI using Chakra UI. The app allows users to create their accounts using email and pass and then they can chat with anyuser registered on the app. The user only needs their username to start chatting with the target user",
        tools: ['Express', 'MongoDB', 'JWT', 'SOCKET.IO', 'React', 'Node Js'],
        role: 'Internship Project',
        code: '',
        demo: '',
        image: crefin,
    },
    
    {
        id: 3,
        name: 'Dice Game',
        description: 'I have developed this Dice Game using React JS. Its my personal project which i have developed while am learning to develop a frontend of an app in react js. I have used React basic hooks useState, useEffect etc.',
        tools: ['React', 'Bootstrap', 'useState', 'useEffect'],
        code: '',
        role: 'Personal Project',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Google Keep Clone',
        description: "I have developed Todo application called Google Keep clone. As a front-end developer, I worked on creating the app interface using ReactJS, Material UI, Redux, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook.",
        tools: ['ReactJS', 'Material UI', 'Redux'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Perosnal Project',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },