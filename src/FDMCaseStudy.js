import admin from './assets/FDM/admin.png';
import calender from './assets/FDM/calender.png';
import consultant from './assets/FDM/consultant main.png';
import finance from './assets/FDM/finance.png';
import manager from './assets/FDM/manager.png';
import visibility from './assets/FDM/visibility.png';
import fdmheader from './assets/FDM/fdmheader.png';



const FDMCaseStudy = {
title: 'FDM Timesheet Web Application',
subtitle:
'A client focused timekeeping application ',

meta: [
{ label: 'Role', value: 'Software engineer (Full stack)' },
{ label: 'Timeline', value: '12 weeks' },
{ label: 'Tools', value: 'Figma, Node, Java' },
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
'FDM Group employs thousands of consultants who work on client sites and are required to submit weekly timesheet detailing hours worked, serving as evidence for consultant pay, client billing and internal financial reporting.',
},
{
type: 'text',
content:
'The core problem within this domain arises from the repetitive, high-volume, and multi-stage nature of the timesheet process that must be completed alongside their scheduled tasks which leads to late and incorrect submissions. By consolidating timesheet submission, approval, and processing into a single application, the system reduces administrative overhead, improves data accuracy, and increases transparency for all stakeholders.',
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
        'The initial data collection process began with researching FDM as a company, understanding the company ethos and values. This included interviewing our client directly by querying the issues with the current system from the perspective of each user (consultants, managers etc). Another facet of research was understanding competing software as well as their shortcomings.',
    },

    {
      type: 'text',
      content:
        'Then the requirements of the application were defined alongside a class diagram and presented to the client so that we could effectively communicate our goals and receive feedback. The class diagram served as a template for the code. To create suitable GUI, a visual plan was created on FIGMA to ensure cohesive UX. ',
    },

    {
      type: 'text',
      content:
        'The final project was then presented in a live demonstration to the client with explanations of our UX choices and ‘hidden features’. ',
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
          'Smooth synchronisation with mainstream Calendars such as Google Calendar.',
          'Ensuring centralisation and stream lined access to inputted data whilst maintaining access levels.',
          'Limited access to FDM client for feedback and understanding of current software.',
        ],
      },

      right: {
        heading: 'Goals',
        items: [
          'consultants to record and submit weekly timesheets through a consistent and user-friendly interface.',
          'Automated reminders and clearly defined submission deadlines ',
          'Line managers are provided with clear visibility of pending approvals, allowing them to review, approve, or reject timesheets efficiently and reduce bottlenecks ',
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
        'The finished application streamlines the timesheet submission and approval process for all users involved, cutting down the time spent on timesheets in general. ',
    },

    {
      type: 'text',
      content:
        'The client was impressed with the consideration to the access levels and compliance with the GDPR considering their offices throughout Europe. As well as the accessibility arrangements for users who had visual impairments and required a high contrast mode.  ',
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
        'Developing software for a client base meant clearly and efficiently communicating with the clients to ensure the product met their needs. Working with the team meant communication was essential in creating a cohesive end result. ',
    },
  ],
},

],

nextProject: {
title: 'Maze Run',
path: '/projects/maze-run',
},
};

export default FDMCaseStudy;
