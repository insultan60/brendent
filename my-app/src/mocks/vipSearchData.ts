// Content for the VIP Home Search page — mirrors the real BW Metro Properties
// "VIP Home Search" experience (the private, AI-assisted buyer search), adapted
// to our own design system and interaction language.

export const vipIntro = {
  eyebrow: 'For Buyers',
  title: 'VIP Home Search',
  text: 'Working together to help find you your dream home.',
};

export const vipDescribe = {
  eyebrow: 'Tell Us What You Want',
  title: 'Describe your dream home!',
  text: 'Start by adding the areas you are interested in, along with your desired price, number of beds, baths, etc.',
};

export const vipSteps = [
  {
    step: '01',
    title: 'Start Your Search',
    text: 'Quickly describe your ideal home.',
  },
  {
    step: '02',
    title: 'Create Your Account',
    text: 'Access your private search portal.',
  },
  {
    step: '03',
    title: 'Instantly View Listings',
    text: 'Together we will find your home.',
  },
];

export const dreamPrompts = [
  'A colonial in Arlington under $1.2M with 4 beds and a fenced yard.',
  'A modern condo in Washington DC near the metro with 2 beds and 2 baths.',
  'A move-in ready home in Bethesda with an open kitchen and a garage.',
  'A townhouse in Alexandria close to Old Town with 3 beds.',
];

export const dreamExamples = [
  'Arlington, 4 beds, under $1.2M',
  'Washington DC condo, 2 beds 2 baths',
  'Bethesda, open kitchen + garage',
];

export const searchAreas = [
  'Washington DC',
  'Arlington',
  'Alexandria',
  'Falls Church',
  'Bethesda',
  'Silver Spring',
  'Leesburg',
  'Bowie',
  'Rockville',
  'Reston',
];

export const searchCriteria = [
  {
    icon: 'map',
    label: 'Areas',
    text: 'Pick the neighborhoods and cities you love across Washington DC, Maryland and Northern Virginia.',
  },
  {
    icon: 'price',
    label: 'Price',
    text: 'Set your budget and your private portal watches for homes that fit it — without the noise.',
  },
  {
    icon: 'bed',
    label: 'Beds',
    text: 'Tell us how many bedrooms you need for the way you actually want to live.',
  },
  {
    icon: 'bath',
    label: 'Baths',
    text: 'Add baths, style and the must-haves that matter most to you and your family.',
  },
];

export const vipSearchSection = {
  eyebrow: 'Built Around Your Priorities',
  titleLead: 'Everything you can',
  titleAccent: 'describe',
  text: 'Start by adding the areas you are interested in, along with your desired price, number of beds, baths, etc. Your private portal keeps watching, so the moment a match appears you are the first to know.',
};