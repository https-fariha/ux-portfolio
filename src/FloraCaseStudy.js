import admin from './assets/FDM/admin.png';
import calender from './assets/FDM/calender.png';
import consultant from './assets/FDM/consultant main.png';
import finance from './assets/FDM/finance.png';
import manager from './assets/FDM/manager.png';
import visibility from './assets/FDM/visibility.png';
import fdmheader from './assets/FDM/fdmheader.png';



const FloraCaseStudy = {
title: 'Flora',
subtitle:
'An e-commerce experience that mirrors the elegance of a high-end physical boutique',

meta: [
{ label: 'Role', value: 'UX designer/ developer' },
{ label: 'Timeline', value: '3 Weeks' },
{ label: 'Tools', value: 'HTML, CSS, JAVASCRIPT' },
],

heroImage: fdmheader,

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
'In the process of understanding UX, it was crucial to develop the fundamentals of a shopping website which is heavily reliant on user interaction. The goal was to combine my interest in UX with my love for flowers.',
},

{
type: 'text',
content:
'The aim was to fulfil the brief of designing and developing a luxury flower shop UX, a digital e-commerce experience that mirrors the elegance, exclusivity, and sensory beauty of a high-end physical boutique. The core goal is to replace cluttered layouts with high-resolution images and a seamless, premium checkout flow.',
},

    {
      type: 'image',
      src: consultant,
      caption:
        'The Consultants homepage gives user an immediate overview of their current working hours and related data.',
      className: 'cs-image--featured',
    },

    {
      type: 'image',
      src: calender,
      caption:
        'The calender view allows consultants to better visualise their working hours and they can also link to their Google calendar.',
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
    'The process began with understanding and noting down how shopping websites functioned and were designed for a seamless user experience. My research focused on ASOS, a popular e-commerce retailer, as their entire brand was dependent on highly functional UX. ',
    },
    {
    type: 'text',
    content:
    'The design process focused on understanding the primary demographic, affluent gift-givers and corporate clients and their psychographics such as disposable income and visual appeal elements. I then curated a brand around these concepts and selected flowers that reflected these traits. ',
    },
    {
    type: 'text',
    content:
    'The development process focused on creating a luxurious-feeling e-commerce feeling reflected mostly in the cohesive colour palette. By utilising HTML, CSS and JavaScript, the seamless process of gift giving was created. ',
    },



    {
      type: 'imageGrid',
      images: [
        {
          src: manager,
          alt: 'manager view',
          caption:
            'The manager view displays active projects alongside their budget',
        },
        {
          src: admin,
          alt: 'admin view',
          caption:
            'The admin view displays all of the active users and grants the ability to add new users',
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
          'Understanding the target demographic with limited access to their feedback',
          'Ensuring the concept of a high-end gifting experience was reflected through the site',
        ],
      },

      right: {
        heading: 'Goals',
        items: [
          'Creating an efficient, frictionless and luxury gifting experience ',
          'Have a clear step-by-step process to purchasing or building bouquets',
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
        'The finished website helped me develop my own stylistic choices whilst being able to justify the choices using UX terminology. It allowed me to map my own project from start to finish whilst relying on my own discipline to draw it to a close within a reasonable time frame. ',
    },

    {
      type: 'imageGrid',
      images: [
        {
          src: finance,
          alt: 'finance view',
          caption:
            'The finance view allows the finance team to view and compile financial data.',
        },
        {
          src: visibility,
          alt: 'High contrast mode',
          caption:
            'The high contrast mode supports visual impairment accessibility requirements',
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
        'My main takeaway was ensuring the aesthetic appeal of a website did not diminish its functionality whilst also maintaining the appearance of a luxury brand. In doing so, I learnt the importance of adhering to interface design principles and using them as set of requirements within each design element. ',
    },
    {
      type: 'text',
      content:
        'I also used various free resources for images and fonts which allowed me to familiarise myself with copyright content and how to legally use certain resources. ',
    },
  ],
},

],

nextProject: {
title: 'FDM Timesheet',
path: '/projects/timesheet',
},
};

export default FloraCaseStudy;
