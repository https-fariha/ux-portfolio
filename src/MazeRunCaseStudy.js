import hero from './assets/MR/hero3.png';
import main from './assets/MR/3.png';
import homescreen from './assets/MR/1.png';
import menu from './assets/MR/2.png';
import lvl2 from './assets/MR/4.png';
import instructions from './assets/MR/instructions.PNG';
import lost from './assets/MR/game_lost.png';




const MazeRunCaseStudy = {
title: 'Maze Run',
subtitle:
'A retro computer game aimed at kids and accompanied by a fast paced sound track',

meta: [
{ label: 'Role', value: 'Game developer' },
{ label: 'Timeline', value: '3 months' },
{ label: 'Tools', value: 'PyGame' },
],

heroImage: hero,

steps: [
{ id: 'background', label: 'Project background' },
{ id: 'process', label: 'Process & approach' },
{ id: 'challenge', label: 'Challenge deep-dive' },
{ id: 'results', label: 'Results & impact' },
{ id: 'learnings', label: 'Learnings & takeaways' },
],

sections: [
{
id: 'background',
heading: 'Project background',
blocks: [
{
type: 'text',
content:
'Within the games industry there has always been a lack of varied content catered to a female audience. The small number of games that are intended for girls focus on a domestic atmosphere, limiting girls to home decorating, cooking or dressing up avatar. The lack of content about survival and exploration aimed at young girls leaves a large gap in the gaming market and creates a divide in interests thus enabling gender norms. ',
},
{
type: 'text',
content:
'Maze run aims to encourage young girls to develop their desire to explore whilst also being able to appreciate the nature inspired aesthetics of the game. It has a simple control mechanism (arrows keys) to target a younger audience. ',
},

    {
      type: 'image',
      src: main,
      caption:
        'The first level of the game introducing the enemies and the maze game-scape.',
      className: 'cs-image--featured',
    },

    {
      type: 'image',
      src: homescreen,
      caption:
        'The opening screen of the game featuring the logo and main character alongside a button that leads to the menu screen',
      className: 'cs-image--featured',
    },
  ],
},

{
  id: 'process',
  heading: 'Process & approach',
  blocks: [
    {
      type: 'text',
      content:
        'The initial data collection process began with researching the gap in the gaming sphere and understanding which demographics were not being targeted. In doing so, my research focused on the underrepresentation of young girls in action-adventure games. The next step was looking at various unisex action-adventure games such as Pokemon Go, Fireboy & Watergirl and Pacman. By conducting this research, I understood what features I wanted to adopt from these games as well as what changes I would implement in my own version. My ideas were then approved and challenged by interviewing my target demographic to understand their wants within games.',
    },

    {
      type: 'text',
      content:
        'To begin working on the design whilst thinking procedurally, I decomposed the problem into a list of requirements which was then turned into a top-down design model. This helped break down my game mechanism in depth with a visual plan. Each element was then turned into a flowchart to ensure the working logistics of the game play so that each scenario was accounted for. ',
    },

    {
      type: 'text',
      content:
        'After designing my game screen using pixel art apps, I developed the actual game using PyGame tutorials. This involved combining various facets of knowledge such as videos and books as it was my first time developing a game using OOP.',
    },

    {
      type: 'text',
      content:
        'Once the game development was complete, I focused on evaluating the game from the lens of my target audience via surveys and usability testing. I then evaluated these results and redesigned the features that had not been well received whilst also creating a maintainability plan for future updates. ',
    },


    {
      type: 'imageGrid',
      aspectRatio: '1 / 1',
      images: [
        {
          src: menu,
          alt: 'menu',
          caption:
            'Menu screen consisting of options to play game, see game instructions or revert to homescreen',
        },
        {
          src: instructions,
          alt: 'instructions',
          caption:
            'Explains how the gameplay works in a simple manner',
        },
      ],
    },
  ],
},

{
  id: 'challenge',
  heading: 'Challenge deep-dive',
  blocks: [
    {
      type: 'twoColumn',
      left: {
        heading: 'Challenges',
        items: [
          'Lack of game development experience and using OOP',
          'Ensuring player movement looked natural whilst using sprites',
          'A modern younger demographic are more accustomed to mobiles / Ipads',
          
        ],
      },

      right: {
        heading: 'Goals',
        items: [
          'Creating a retro-inspired computer game with a consistent colour palette and overall theme ',
          'Understand a younger audience’s playing habit and implementing the game play features accordingly',
          'Ensure the game play was a well thought out experience using sound and design elements',
        ],
      },
    },
  ],
},

{
  id: 'results',
  heading: 'Results & impact',
  blocks: [
    {
      type: 'text',
      content:
        'The finished game was an immersive game experience accompanied by visually appealing pixel graphics and a fast paced soundtrack.',
    },

    {
      type: 'text',
      content:
        'The documentation process allowed me to understand the thought behind the entire software engineering process and how a project was built from scratch. It was helpful to have a detailed guide to refer back to and implement upon. ',
    },

    {
      type: 'imageGrid',
      aspectRatio: '1 / 1',
      images: [
        {
          src: lvl2,
          alt: 'Level 2',
          caption:
            'The second level of game consisting of faster characters, new colour scheme and accompanying soundtrack',
        },
        {
          src: lost,
          alt: 'Game lost screen',
          caption:
            'The "game lost" screen displaying points upon losing',
        },
      ],
    },
  ],
},

{
  id: 'learnings',
  heading: 'Learnings & takeaways',
  blocks: [
    {
      type: 'text',
      content:
        'Designing for a niche use case meant ensuring the project was simple enough for a young audience to use whilst also being engaging enough to hold their attention. ',
    },
    {
      type: 'text',
      content:
        'Decomposing the project within my documentation ensured I had a consistent and clear goal for each step of the project whilst also being able to refer back to it when necessary. ',
    },
  ],
},

],


};

export default MazeRunCaseStudy;
