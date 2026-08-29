import weatherLensHero from './assets/WeatherLens/WL-titlecard.png';

import weatherLensScreen1 from './assets/WeatherLens/1.png';
import weatherLensScreen2 from './assets/WeatherLens/2.png';
import weatherLensScreen3 from './assets/WeatherLens/3.png';
import weatherLensScreen4 from './assets/WeatherLens/4.png';
import weatherLensScreen5 from './assets/WeatherLens/5.png';

const weatherLensCaseStudy = {
title: 'WeatherLens',
subtitle:
'An integrated weather API built to help photographers plan shoots around the light.',

meta: [
{ label: 'Role', value: 'UX Designer & Developer' },
{ label: 'Timeline', value: '6 weeks' },
{ label: 'Tools', value: 'Figma, React' },
],

heroImage: weatherLensHero,

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
'Landscape photographers plan their artistry around weather conditions: aiming to find the perfect lighting to encapsulate the mood they are trying to showcase.',
},
{
type: 'text',
content:
'Most weather apps are built for general purpose weather conditions, not focusing on a photographers needs such as golden hour or cloud cover. WeatherLens aims to close that gap by providing a trustworthy read of weather and lighting conditions.',
},

    {
      type: 'image',
      src: weatherLensScreen1,
      caption:
        'The WeatherLens homepage gives photographers an immediate overview of the current weather and shooting conditions.',
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
        'The initial data collection process began with interviewing landscape photographers about their experiences with weather apps. Researching the primary user group ensured we understood their frustrations and how we could differentiate our application. The data was then compiled into numerical data.',
    },

    {
      type: 'text',
      content:
        'Based on our data, we devised the key requirements of the application such as providing location specific weather insights whilst highlighting ideal weather conditions to shoot in.',
    },

    {
      type: 'text',
      content:
        'Our design rationale was then derived from our data and requirements whilst also upholding UX design principles, ensuring ease of use. The FIGMA build began with rough frames and simplified interactions to then be solidified into a clickable prototype.',
    },

    {
      type: 'text',
      content:
        'Upon completing the FIGMA build, the interface was rebuilt in REACT using a live weather API so the reliability and relevancy of weather data could be tested.',
    },

    {
      type: 'imageGrid',
      images: [
        {
          src: weatherLensScreen2,
          alt: 'WeatherLens HOURLY weather forecast interface',
          caption:
            'Weather information is organised into clear, accessible sections - making information easy to scan such as hourly weather conditions',
        },
        {
          src: weatherLensScreen3,
          alt: 'WeatherLens DAILY detailed weather interface',
          caption:
            'The daily forecast helps photographers compare conditions across upcoming days',
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
          'Present relevant, trustworthy weather data to photographers on the move.',
          'Navigate inconsistent data formats across weather API providers.',
          'Limited access to working photographers for early testing.',
        ],
      },

      right: {
        heading: 'Goals',
        items: [
          'Provide precise and location specific weather insights whilst highlighting ideal weather conditions',
          'Ensure the system was concise and photography specific without the user having to decode any information',
          'Should support location planning and allow users to collaborate',
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
        'The finished application translates raw forecast data into an easily read update on shooting conditions, cutting down the time photographers spend cross-checking multiple weather apps before heading out.',
    },

    {
      type: 'text',
      content:
        'WeatherLens allows photographers to share their experiences about hidden photography locations whilst simultaneously checking and saving potential shooting sites. ',
    },

    {
      type: 'imageGrid',
      images: [
        {
          src: weatherLensScreen4,
          alt: 'WeatherLens Forum weather interface',
          caption:
            'The forum allows users to connect with each other and share hidden gem locations',
        },
        {
          src: weatherLensScreen5,
          alt: 'WeatherLens Saved locations weather interface',
          caption:
            'The saved locations feature supports repeated, quick browsing of specified locations',
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
        'Designing for a niche use case meant constantly resisting the urge to add general-purpose weather features. Keeping the scope narrow made the application sharper and more tailored to what the primary demographic required.',
    },

    {
      type: 'text',
      content:
        'It taught me to focus on the essential elements and build up the idea upon completion of the basics, creating a clear roadmap of what to build next once real users started using it.',
    },
  ],
},

],

nextProject: {
title: 'FDM Timesheet application',
path: '/projects/timesheet',
},
};

export default weatherLensCaseStudy;
