import React from 'react';
import ProjectCard from './ProjectCard';

// sample data - edit this array or pass a `projects` prop to customize
const sampleProjects = [
  {
    title: 'Graduation Part II',
    date: 'April 2025',
    description: 'I graduated from DigiPen Institute of Technology with a M.S. in Computer Science concentrating in Computer Graphics.',
    imageUrl: '/images/graduation-part-ii.jpg',
  },
  {
    title: '3D Game Engine: Grappling With Ideas',
    date: 'April 2025',
    description: 'Game from a custom 3D engine. The engine uses OpenGL and the following programming languages: C++, Lua, GLSL.',
    imageUrl: '/images/grappling-with-ideas.jpg',
    url: 'https://gamedev-noob.itch.io/grappling-with-ideas',
  },
  {
    title: 'Animation Engine',
    date: 'December 2024',
    description: 'A custom animation engine built with C++ and OpenGL. The engine supports skeletal animation, keyframe interpolation, and inverse kinematics. It is designed to be efficient and flexible, allowing for a wide range of animation styles and techniques.',
    imageUrl: '/images/animation-engine-particles.jpg',
    url: 'https://github.com/ggrossne/Renderer',
  },
  {
    title: '2D Game Engine: Lance-A-Lot',
    date: 'April 2024',
    description: 'Lance-A-Lot is a 2D platformer 4-player couch co-op experience. Compete with your friends across Joust against your friends and determine the lancing champion! ',
    imageUrl: '/images/lance-a-lot.jpg',
    url: 'https://gamedev-noob.itch.io/lance-a-lot',
  },
  {
    title: 'BRDF Render Engine',
    date: 'April 2024',
    description: 'Featuring a physically based rendering pipeline, this project implements a microfacet BRDF model to achieve realistic lighting and material interactions. The engine supports various material types and dynamic lighting conditions, making it suitable for real-time applications.',
    imageUrl: '/images/brdf-render-engine.jpg',
    url: 'https://github.com/ggrossne/CS541-Graphics-Engine',
  },    
  {
    title: 'Graduation Part I',
    date: 'December 2022',
    description: 'I graduated with honors from Cal Poly SLO with a B.S. in Liberal Arts and Engineering Studies with minors in Computing for the Interactive Arts and Music.',
    imageUrl: '/images/graduation-part-i.jpg',
  },
  {
    title: 'Unity VR Game: Dream Sequencer',
    date: 'December 2022',
    description: 'A VR audio visualizer that creates immersive, interactive experiences for users. The system generates dynamic visualizations in real-time based on audio input, allowing users to explore and manipulate their audio in a three-dimensional space.',
    imageUrl: '/images/dream-sequencer.jpg',
    url: 'https://drive.google.com/file/d/1qZyEOJNX3rD6uel09-OCEu3kqNn5wd7q/view',
  },
  {
    title: 'Cal Poly Digital Art Portfolio',
    date: 'December 2022',
    description: 'A collection of digital art projects over the last 4 years. Featuring app mockups, 2D animations, and Photoshop edits.',
    imageUrl: '/images/digital-art-portfolio.jpg',
    url: 'https://drive.google.com/drive/folders/1X5p4JmVw_PIue-yyHwbc7RNQJp0is_nK?usp=sharing',
  },
  {
    title: 'Game: Catffeinated',
    date: 'June 2022',
    description: 'Catffeinated is a 3D single player collectathon game. You, the player, are a cat in a cat cafe looking for some heart-shaped kibble. Other cats may try and block your path - or even fight you for it. Grab as much kibble as you can so you can power up!',
    imageUrl: '/images/catffeinated.jpg',
    url: 'https://github.com/kailishan/Catffeinated',
  },  
  {
    title: 'Unity VR Game: Life',
    date: 'June 2022',
    description: 'A full-scale VR experience with three other students using Blender, Unity, Oculus, Substance Painter, and PlasticSCM that follows the story of a character who has died. Through the experience, the user embodies this character and as a result, learns more about their own life.',
    imageUrl: '/images/vr-life.jpg',
    url: 'https://www.youtube.com/watch?v=-K4ggXpu-fM&t=2s',
  },  
  {
    title: 'Unity Game: Stellar Sounds',
    date: 'March 2022',
    description: 'A collaborative effort between Cal Poly’s 3D modeling and interaction engineering classes, Stellar Sounds is a Simon Says-Esque memory game that allows the players to explore alien instruments from beyond the cosmos.',
    imageUrl: '/images/stellar-sounds.jpg',
    url: 'https://play.unity.com/en/games/0945644e-4d80-4815-a571-153450cc4fe5/stellar-sounds-csc-378',
  },  
  {
    title: 'Retro Music Visualizer',
    date: 'March 2022',
    description: 'A simple adaptive audio visualizer made entirely with C++ and OpenGL.',
    imageUrl: '/images/retro-visualizer.jpg',
  },  
  {
    title: 'Cal Poly Wind Ensemble Spring Concert',
    date: 'May 2021',
    description: 'A simple adaptive audio visualizer made entirely with C++ and OpenGL.',
    imageUrl: '/images/wind-ensemble.jpg',
    url: 'https://www.youtube.com/watch?v=eHyodGo3uhU',
  },
  {
    title: 'Unity Game: Space Chase',
    date: 'March 2021',
    description: 'Space Chase, is a third-person puzzle-adventure hybrid game of progression. It features world-sized puzzles, which the player is encouraged to solve by exploring the given terrain. It also features low-skill combat, where players are prompted to defeat enemies by simply clicking to swing their character’s war axe. The game also allows for an alternative stealth playstyle at times should the player choose to avoid enemy conflict. All of these are tied together by adventure sequences, in which the player is engaged with platforming to advance to the next sequence.',
    imageUrl: '/images/space-chase.jpg',
    url: 'https://fullbringer.itch.io/space-chase',
  },  
  {
    title: '3D Metal Printing Error Detection Model',
    date: 'December 2020',
    description: 'A machine learning model that detects errors in 3D metal printing processes using computer vision and neural networks.',
    imageUrl: '/images/3d-metal-printing.jpg',
    url: 'https://docs.google.com/document/d/1SP_DA-z681OAtzt6InvGTR7u52XSZK2H/edit',
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
