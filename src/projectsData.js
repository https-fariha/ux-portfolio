// Edit this array to add, remove, or update projects shown in the grid.
// categories: an ARRAY — a project can belong to more than one, e.g. ['Web Dev', 'UX Dev/Design'].
//   It will show up under every matching filter tab.
// theme: 'light' uses the pale-blue card, 'dark' uses the navy/teal card (mirrors the Figma checkerboard layout).
// caseStudyPath: route to a full case study page (leave '' if none exists yet).
// liveUrl: link to the live/deployed project (leave '' if none).

const projects = [
  {
    id: 'weatherlens',
    title: 'WeatherLens',
    tagline: 'An integrated weather API built to help photographers plan shoots around the light.',
    categories: ['Web Dev', 'UX Dev/Design', 'FIGMA'],
    tools: ['FIGMA', 'REACT'],
    theme: 'light',
    liveUrl: 'https://github.com/https-fariha/WeatherLens',
    caseStudyPath: '/projects/weatherlens',
  },
  {
    id: 'flora',
    title: 'Flora',
    tagline: 'A luxury online floral retailer specialising in ikebana arrangements.',
    categories: ['UX Dev/Design', 'Web Dev'],
    tools: ['FIGMA' ,'HTML, CSS, JavaScript'],
    theme: 'dark',
    liveUrl: '',
    caseStudyPath: '/projects/flora',
  },
  {
    id: 'timesheet',
    title: 'FDM Timesheet App',
    tagline: 'A client tailored time keeping web application with user-centred access control to ensure maintainability.',
    categories: ['Web Dev', 'FIGMA', 'Full-Stack'],
    tools: ['REACT', 'NODE'],
    theme: 'light',
    liveUrl: 'https://github.com/https-fariha/FDM-Time-Sheet-App',
    caseStudyPath: '/projects/timesheet',
  },
  {
    id: 'maze-run',
    title: 'Maze Run Game',
    tagline: 'A retro computer game designed for kids.',
    categories: ['Game Dev', 'Full-Stack'],
    tools: ['PYGAME'],
    theme: 'dark',
    liveUrl: 'https://github.com/https-fariha/Maze-run',
    caseStudyPath: '/projects/maze-run',
  },
  {
    id: 'thaal-supply',
    title: 'Thaal Supply',
    tagline: 'Redesigning and tailoring a Desi wedding brand to the target demographic.',
    categories: ['UX Dev/Design', 'FIGMA'],
    tools: ['FIGMA', 'SHOPIFY'],
    theme: 'light',
    liveUrl: '',
    caseStudyPath: '',
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    tagline: 'An image-classification pipeline trained to recognise handwritten digits.',
    categories: [],
    tools: ['PYTHON'],
    theme: 'dark',
    liveUrl: '',
    caseStudyPath: '',
  },
  
];

export default projects;