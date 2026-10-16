import React from 'react';
import ProjectCard from './ProjectCard';

// sample data - edit this array or pass a `projects` prop to customize
const sampleProjects = [
  {
    title: 'Website Redesign: React.js',
    date: 'March 2026',
    description: 'Wanting to move away from subscription-based models, I redesigned my portfolio website using React.js and modern web development practices. The new design features a clean and responsive layout, improved performance, and enhanced accessibility.',
    imageUrl: '/images/website-redesign.jpg',
  },
  {
    title: 'Powerschool Data Recovery Project',
    date: 'October - December 2025',
    description: 'I led a project to recover and analyze data from a corrupted Powerschool database for a local school district. By self teaching myself SQL, I was able to extract and clean the data, allowing the district to restore their student records and continue operations without significant disruption.',
    imageUrl: '/images/powerschool-data-recovery.jpg',
  },
  {
    title: 'Graduation Part II',
    date: 'April 2025',
    description: 'I graduated from DigiPen Institute of Technology with a M.S. in Computer Science concentrating in Computer Graphics.',
    imageUrl: '/images/graduation-part-ii.jpg',
  },
  {
    title: '3D Game Engine: Grappling With Ideas',
    date: 'August 2024 -April 2025',
    description: 'For my master\'s capstone project, I worked with a team of five other students to create a 3D game engine and a game built on top of it. I served as the Project Manager and Lead Graphics Programmer. The game is a 3D platformer where the player uses a grappling hook to swing around and solve puzzles.',
    imageUrl: '/images/grappling-with-ideas.jpg',
    url: 'https://gamedev-noob.itch.io/grappling-with-ideas',
    buttonText: 'Play!',
  },
  {
    title: 'Animation Engine',
    date: 'August - December 2024',
    description: 'I made a custom animation, particle, and physics engine built with C++ and OpenGL. The engine supports skeletal animation, keyframe interpolation, inverse kinematics, Runge-Kutta 2nd order physics integration, and a CPU particle system.',
    imageUrl: '/images/animation-engine-particles.jpg',
    url: 'https://github.com/ggrossne/Renderer',
    buttonText: 'Repo',
  },
  {
    title: '2D Game Engine: Lance-A-Lot',
    date: 'January - April 2024',
    description: 'During my first year of graduate school, I worked with a team of four other students to create a 2D game engine and a game built on top of it. I served as the Lead Graphics Programmer and Co-Project Manager. The game is a platform fighter where players use lances as their main weapon and means of traversal. Players can use their lances to grapple onto walls and other players, allowing for fast-paced movement and combat.',
    imageUrl: '/images/lance-a-lot.jpg',
    url: 'https://gamedev-noob.itch.io/lance-a-lot',
    buttonText: 'Play!',
  },
  {
    title: 'Render Engine',
    date: 'January - April 2024',
    description: 'I enjoyed creating this physically based rendering engine built with C++ and OpenGL. Featuring a microfacet BRDF model, deferred shading, compute shaders for convolution blur shadows, ambient occlusion, and image-based lighting.',
    imageUrl: '/images/brdf-render-engine.jpg',
    url: 'https://github.com/ggrossne/CS541-Graphics-Engine',
    buttonText: 'Repo',
  },    
  {
    title: 'Graduation Part I',
    date: 'December 2022',
    description: 'I graduated with honors from Cal Poly SLO with a B.S. in Liberal Arts and Engineering Studies with minors in Computing for the Interactive Arts and Music.',
    imageUrl: '/images/graduation-part-i.jpg',
  },
  {
    title: 'Unity VR Game: Dream Sequencer',
    date: 'April - December 2022',
    description: 'For my senior project, I created a VR audio visualizer that creates immersive, interactive experiences for users. The system generates dynamic visualizations in real-time based on audio input, allowing users to explore and manipulate their audio in a three-dimensional space.',
    imageUrl: '/images/dream-sequencer.jpg',
    url: 'https://drive.google.com/file/d/1qZyEOJNX3rD6uel09-OCEu3kqNn5wd7q/view',
    buttonText: 'Demo',
  },
  {
    title: 'Cal Poly Digital Art Portfolio',
    date: 'September 2019 - December 2022',
    description: 'A collection of my digital art projects over the last 4 years. Featuring app mockups, 2D animations, and Photoshop edits.',
    imageUrl: '/images/digital-art-portfolio.jpg',
    url: 'https://drive.google.com/drive/folders/1X5p4JmVw_PIue-yyHwbc7RNQJp0is_nK?usp=sharing',
    buttonText: 'View',
  },
  {
    title: 'Game: Catffeinated',
    date: 'April - June 2022',
    description: 'Catffeinated is a 3D single player collectathon game I created with a small team. Play as a cat in a cat cafe looking for some heart-shaped kibble. Other cats may try and block your path, so try to grab as much kibble as you can so you can power up!',
    imageUrl: '/images/catffeinated.jpg',
    url: 'https://github.com/kailishan/Catffeinated',
    buttonText: 'Repo',
  },  
  {
    title: 'Unity VR Game: Life',
    date: 'January - June 2022',
    description: 'I served as a programmer and level designer for a VR experience with three other students using Blender, Unity, Oculus, Substance Painter, and PlasticSCM that follows the story of a character who has died. Through the experience, the user embodies this character and as a result, learns more about their own life.',
    imageUrl: '/images/vr-life.jpg',
    url: 'https://www.youtube.com/watch?v=-K4ggXpu-fM&t=2s',
    buttonText: 'Trailer',
  },  
  {
    title: 'Unity Game: Stellar Sounds',
    date: 'January - March 2022',
    description: 'I developed all the assets for Stellar Sounds, a Simon Says-Esque memory game that allows the players to explore alien instruments from beyond the cosmos.',
    imageUrl: '/images/stellar-sounds.jpg',
    url: 'https://play.unity.com/en/games/0945644e-4d80-4815-a571-153450cc4fe5/stellar-sounds-csc-378',
    buttonText: 'Play!',
  },  
  {
    title: 'Retro Music Visualizer',
    date: 'January - March 2022',
    description: 'I made a simple adaptive audio visualizer made entirely with C++ and OpenGL.',
    imageUrl: '/images/retro-visualizer.jpg',
  },  
  {
    title: 'Cal Poly Wind Ensemble Spring Concert',
    date: 'May 2021',
    description: 'A collaborative project between the Cal Poly Wind Ensemble and Sound Design program, I mixed and mastered the audio for the Spring 2021 concert, which was recorded in advance and streamed online due to COVID-19 restrictions.',
    imageUrl: '/images/wind-ensemble.jpg',
    url: 'https://www.youtube.com/watch?v=eHyodGo3uhU',
    buttonText: 'Watch',
  },
  {
    title: 'Unity Game: Space Chase',
    date: 'January - March 2021',
    description: 'Space Chase, is a third-person puzzle-adventure hybrid game of progression I created through Cal Poly\'s game design program. It features world-sized puzzles, which the player is encouraged to solve by exploring the given terrain. It also features low-skill combat, where players are prompted to defeat enemies by simply clicking to swing their character’s war axe. The game also allows for an alternative stealth playstyle at times should the player choose to avoid enemy conflict.',
    imageUrl: '/images/space-chase.jpg',
    url: 'https://fullbringer.itch.io/space-chase',
    buttonText: 'Play!',
  },  
  {
    title: '3D Metal Printing Error Detection Model',
    date: 'September - December 2020',
    description: 'I did research for and co-authored a machine learning model that detects errors in 3D metal printing processes using computer vision and neural networks.',
    imageUrl: '/images/3d-metal-printing.jpg',
    url: 'https://docs.google.com/document/d/1SP_DA-z681OAtzt6InvGTR7u52XSZK2H/edit',
    buttonText: 'Report',
  },
  
];

export default function Portfolio({ projects = sampleProjects }) {
  return (
    <div className="portfolio">
      {projects.map((p, idx) => (
        <ProjectCard key={idx} {...p} />
      ))}
    </div>
  );
}
