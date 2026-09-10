import hero from './assets/ThaalSupply/header.png';
import logo from './assets/ThaalSupply/Logo.png';
import home from './assets/ThaalSupply/Home.png';
import about from './assets/ThaalSupply/About.png';
import product from './assets/ThaalSupply/Product.png';
import business from './assets/ThaalSupply/Business.png';
import faq from './assets/ThaalSupply/FAQ.png'




const ThaalSupplyCaseStudy = {
title: 'Thaal Supply',
subtitle:
'Redesigning and curating the user experience for a South Asian gifting brand.',

meta: [
{ label: 'Role', value: 'UX designer' },
{ label: 'Timeline', value: '1 month' },
{ label: 'Tools', value: 'Shopify, Figma, IbisPaint' },
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
'I approached Thaal Supply, a South Asian owned small business that specialises in wedding gifting supplies, with a proposal to redesign their brand image to truly represent their Desi heritage. The current brand design failed to fully represent the owner’s heritage and lacked overall appeal to customers. ,'
},
{
type: 'text',
content:
'The aim of the project was to establish a recognisable brand identity through visual elements such as logos and the colour palette. To create an upscaled brand identity, the website had to reflect elegance and sophistication. ',
},

    {
      type: 'image',
      src: logo,
      caption:
        'The new redesigned logo combining tradition and modern design',
      className: 'cs-image--featured',
    },

    {
      type: 'image',
      src: home,
      caption:
        'The websites homepage featuring the logo and dark red main colour',
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
        'To create my initial proposal, I focused on researching shopping websites to see what elements made up the ideal site. This included looking at Desi owned businesses as well as mainstream, larger businesses. Then, I focused on Thaal Supply’s website to see what elements they had included as well as finding elements that required changing. For example, the logo fonts and inconsistent colour scheme throughout. ',
    },
    {
      type: 'text',
      content:
        'This allowed me to formulate a detailed proposal of what could be changed alongside potential ideas for the image that we were trying to curate for the brand. Initially I created a mood-board of potential design ideas, colours and fonts that were presented to the client. In doing so, I was able to gain an understanding for the direction of the brand and general feedback about the concept. The concept to link the brand heavily to traditional South Asian motifs and colour palettes whilst maintaining a bright, elegant nature was formed.',
    },
    {
      type: 'text',
      content:
        'Then came the design process that began using Figma. I replicated the website layout using Figma and then began experimenting with various designs. I wanted to achieve a traditional inspired logo whilst appealing to the young adult target demographic. The initial colour palette appeared to have a ‘dated’ appearance when paired with the fonts. Thus, I opted for a lighter toned colour palette whilst using the dark red as an accent colour. The dark red maintained the traditional bridal look that I initially wanted whilst pairing well with the lighter pastels. The paisley design is a typical motif found in South Asian artwork, particularly bridal clothing. ',
    },
    {
      type: 'text',
      content:
        'Upon every iteration of the designs, I sent a mock up to the client to receive detailed feedback. After several iterations, the design had completely adjusted to the client’s ideal logo and colour palette – combining tradition and modern design.',
    },


    {
      type: 'imageGrid',
      aspectRatio: '1 / 1',
      images: [
        {
          src: product,
          alt: 'Product page',
          caption:
            'Product selection page',
        },
        {
          src: about,
          alt: 'About page',
          caption:
            'About page to explain the origin of the brand and showcasing the bookmark design',
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
          'Lack of digital drawing experience',
          'Understanding copyright infringements and utilising free fonts for commercial use',
          'Ensuring the designs would work for cross-platform marketing such as websites, print and digital campaigns',
          
        ],
      },

      right: {
        heading: 'Goals',
        items: [
          'Balancing tradition and modern design to represent the brand and the client’s heritage',
          'Curate a strong brand identity that was easily recognisable and elegant',
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
        'The finalised website has a strong, curated brand identity with matching visuals that can be utilised on multi-media platforms for various forms of marketing. The strong communication with the client led to their ideal design being brought to life with their feedback aiding each step of the process. ',
    },

    {
      type: 'imageGrid',
      aspectRatio: '1 / 1',
      images: [
        {
          src: faq,
          alt: 'FAQ page',
          caption:
            'The frequently asked questions page which also features the bookmark',
        },
        {
          src: business,
          alt: 'Business card',
          caption:
            'The business card which features the logo and bookmark design',
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
        'This project taught me how clear communication with the client can be crucial to developing a solution that both parties are happy with. For every iteration of my design, I asked for client feedback which sometimes led to being disappointed but that was an essential step in getting the final design that both the client and I could love.  ',
    },
    {
      type: 'text',
      content:
        'In my next project, I would change my approach to initial idea conception by creating a more solidified idea of what could be changed. In this project, I focused more on proposing an aesthetic rather than a ready concept. This meant the client and I had slightly different ideas of what the outcome should look like. Despite this and through the process of repeated communication, the final outcome was satisfiable for both parties. ',
    },
  ],
},

],

};

export default ThaalSupplyCaseStudy;
