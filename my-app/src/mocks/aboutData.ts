export const aboutHero = {
  eyebrow: 'A Strategic, Service-First Approach to',
  title: 'Real Estate',
  text: 'Brandon Wilson is a dedicated full-time real estate professional serving clients throughout the Washington, D.C., Maryland, and Northern Virginia area. Known for his commitment to excellence and personalized service, Brandon combines real-world experience, business acumen, and a genuine passion for helping people achieve their homeownership and investment goals.',
  image:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
};

export const aboutBio = {
  eyebrow: 'Meet',
  name: 'Brandon Wilson',
  portrait: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
  designations: 'ABR · SRS · MRP · RENE',
  paragraphs: [
    'A native of Tunkhannock, Pennsylvania, Brandon’s strong work ethic began on his family’s dairy farm before he earned a four-year Army ROTC scholarship to Lock Haven University of Pennsylvania. He graduated with a Bachelor’s in Health Science and a Minor in International Studies, commissioning into the U.S. Army Reserve as a Transportation Officer. Brandon later completed his Master of Business Administration and was selected as a Presidential Management Fellow, launching a successful career in federal service with FEMA as a Logistics Management Specialist. His military and government experience—marked by overseas deployments to Oman and Jordan—reinforced his leadership, problem-solving, and organizational skills, qualities that now define his real estate practice.',
    'Today, real estate is Brandon’s full-time focus and professional passion. Having personally bought and sold multiple homes, he understands the emotional and financial significance of these life decisions. He’s driven by the opportunity to guide clients through every step of the buying, selling, and investing process with professionalism, transparency, and care. Whether assisting first-time homebuyers, seasoned investors, or military families, Brandon brings both strategic insight and heartfelt dedication to every transaction.',
    'Outside of real estate, Brandon enjoys staying active through soccer and volleyball, traveling, and exploring new opportunities in real estate investing. His well-rounded background, disciplined approach, and client-first mindset make him a trusted advisor and a valued partner in the real estate journey.',
  ],
  cta: 'Work with me',
  ctaHref: '#contact',
};

export interface AboutStat {
  label: string;
  caption: string;
  prefix: string;
  to: number;
  decimals: number;
  suffix: string;
}

export const aboutStats: AboutStat[] = [
  { label: 'Over', caption: 'Career Sales Volume', prefix: '$', to: 5.1, decimals: 1, suffix: 'M' },
  { label: 'Over', caption: 'Transactions Closed', prefix: '', to: 9, decimals: 0, suffix: '' },
  { label: 'Last 12 months', caption: 'Sales Volume', prefix: '$', to: 2.7, decimals: 1, suffix: 'M' },
  { label: 'Verified', caption: 'Client Rating', prefix: '', to: 5.0, decimals: 1, suffix: '★' },
];

export interface AboutReview {
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

export const aboutReviews: AboutReview[] = [
  {
    name: 'Rodrigo Soto',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'I had a great experience working with Brandon to buy my first home in Columbia Heights. As a first-time homebuyer, there was a lot about the process that was new to me, and Brandon was incredibly helpful, patient, and responsive every step of the way. He took the time to answer my questions, explain what to expect, and make sure I felt comfortable and informed throughout the process. Brandon made the entire home-buying experience much less intimidating, especially on days I was feeling confused, and helped me find a place in Columbia Heights that I’m excited to now call home. I’d absolutely recommend him, especially to anyone buying a home for the first time.',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjVqAPZm9bnz-sA6jNUHdbxnz7EpyhBKFL7cY5iRLSGojscyrQ05sg=s120-c-rp-mo',
  },
  {
    name: 'Ronny Escobar',
    role: 'Investor · Maryland',
    rating: 5,
    text: 'I can’t recommend Brandon highly enough. From start to finish, he was attentive, responsive, and genuinely invested in helping me find great tenants for my property. What really stood out was that he went well beyond what I’d expect from a real estate agent. While I was traveling internationally, an unexpected maintenance issue came up at my property. Since I wasn’t in a position to make calls or coordinate repairs, Brandon stepped in and helped coordinate everything. That level of support gave me tremendous peace of mind. He also connected me with several contractors for projects around the house, and every recommendation was excellent. It’s clear that Brandon has built a strong network of trusted professionals and truly cares about his clients long after the transaction. If you’re looking for someone who is knowledgeable, responsive, and treats you like a partner instead of just another client, I highly recommend Brandon.',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjWx7wgvt9uHcbI4Zvz2cxmJRIBafYGTrZbc22e_eHjqvfdTE8kH=s120-c-rp-mo',
  },
  {
    name: 'Kris Otto (Kris Ngo)',
    role: 'Buyer · Virginia',
    rating: 5,
    text: 'Five stars for Brandon honestly doesn’t feel like enough. He is, without a doubt, the best real estate agent I’ve ever worked with. From the day we started looking for a home to the day we closed, the entire process took less than two months. As a first-time homebuyer, I had a lot of questions, specific requests, and even some personal challenges along the way. Brandon was patient, professional, and incredibly supportive through every step. What I appreciated most was his honesty. He never tried to sell me on a property just to close a deal. Instead, he carefully explained the pros and cons of every home we viewed, making sure I had all the information I needed to make the right decision for myself. I always felt that he had my best interests at heart. His dedication, responsiveness, and hard work made what could have been a stressful experience feel smooth and manageable. He went above and beyond to ensure everything stayed on track and that I felt confident throughout the entire process. I wouldn’t hesitate to work with Brandon again in the future, and I wholeheartedly recommend him to anyone looking to buy or sell a home. If you’re searching for a realtor who truly cares about his clients, Brandon is the one.',
    avatar:
      'https://lh3.googleusercontent.com/a-/ALV-UjXyi39bkNxZxkNW6t7MzXhHPSfx-KBrWFD-dajuBHrwwgDihLE0=s120-c-rp-mo-ba12',
  },
  {
    name: 'Sam Winkeler',
    role: 'Lender Partner · DMV',
    rating: 5,
    text: 'Working with Brandon Wilson has been a great experience. He’s a true professional who knows the DMV real estate market inside and out, and his attention to detail when writing contracts is second to none. From the lending side, I’ve seen firsthand how thoroughly Brandon works to protect his clients throughout every step of the home buying process. His knowledge, communication, and commitment to his clients make him an outstanding Realtor and someone I would confidently recommend to anyone buying or selling a home in the DMV.',
    avatar:
      'https://lh3.googleusercontent.com/a/ACg8ocJ7cdJIOjTzDjvrDSfruZpKSox1QVtsj4-tYqi9zNMamzQ_DQ=s120-c-rp-mo',
  },
];

export const successStories = {
  eyebrow: 'In the Words of our Clients',
  title: 'Success Stories',
  description:
    'Real reviews from buyers, sellers and investors who trusted Brandon with one of the biggest decisions of their lives.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-0263.jpeg',
  rating: '5.0',
  cta: 'read all',
  ctaHref: '/#testimonials',
};

export interface AboutService {
  title: string;
  text: string;
  image: string;
  href: string;
}

export const aboutServices: AboutService[] = [
  {
    title: 'Buying',
    text: 'From understanding market intricacies to leveraging our local knowledge, we are committed to securing the best results.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1568.jpg',
    href: '/buyers',
  },
  {
    title: 'Selling',
    text: 'Selling your home demands expert skills and guidance, and we understand the importance of this process.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-0267.jpeg',
    href: '/sellers',
  },
  {
    title: 'Explore',
    text: 'Explore the diverse communities across the DMV area and discover which neighborhood best fits your lifestyle, commute, and long-term goals.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide.jpg',
    href: '/explore-areas',
  },
];