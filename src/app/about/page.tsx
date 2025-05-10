import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Tom Goss | Developer & Designer',
  description: 'Learn more about Tom Goss, his background, experience, projects, and skills.',
  keywords: ['about', 'biography', 'skills', 'experience', 'education', 'portfolio'],
  openGraph: {
    title: 'About Tom Goss | Developer & Designer',
    description: 'Learn more about Tom Goss, his background, experience, projects, and skills.',
    url: 'https://tomgoss.dev/about',
    siteName: 'Thomas Goss',
    images: [
      {
        url: 'https://tomgoss.dev/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Thomas Goss',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tom Goss | Developer & Designer',
    description: 'Learn more about Tom Goss, his background, experience, projects, and skills.',
    images: ['https://tomgoss.dev/images/og-image.jpg'],
  },
};

export default function AboutPage() {
  // Skills grouped by category
  const skills = [
    { 
      category: 'Development', 
      items: ['JavaScript/TypeScript', 'React', 'Next.js', 'Node.js', 'CSS/Tailwind', 'RESTful APIs', 'Responsive Design'] 
    },
    { 
      category: 'Design', 
      items: ['UI/UX Design', 'Figma', 'Adobe Suite', 'Design Systems', 'Prototyping', 'Wireframing'] 
    },
    { 
      category: 'Other', 
      items: ['Project Management', 'Technical Writing', 'Git/Version Control', 'Agile Methodologies', 'SEO Basics'] 
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Intro */}
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Image Column */}
          <div className="md:col-span-1">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-md mb-6">
              <Image 
                src="/images/headshot.svg" 
                alt="Tom Goss" 
                width={400} 
                height={400}
                className="object-cover" 
              />
            </div>
            
            <div className="space-y-4">
              <Link
                href="/cv.pdf"
                className="block w-full text-center px-4 py-3 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
              
              <div className="flex justify-center space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                   className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Bio Column */}
          <div className="md:col-span-2 space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl">
                I'm a passionate developer and designer focused on creating beautiful, functional digital experiences.
              </p>
              
              <p>
                With expertise in both frontend development and design, I bridge the gap between aesthetics and functionality,
                creating websites and applications that not only look great but also deliver exceptional user experiences.
              </p>
              
              <p>
                My approach combines thoughtful design principles with clean, efficient code to build 
                solutions that solve real problems for users and businesses alike.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-16 bg-white dark:bg-neutral-800 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* My Story Section - Article Format */}
      <section className="max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8">My Story</h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3>How It All Started</h3>
          <p>
            My journey in the world of web development and design began when I was still in school. 
            Fascinated by how websites worked, I spent countless hours tinkering with HTML and CSS, 
            creating simple websites for friends and local community groups.
          </p>
          
          <h3>Professional Journey</h3>
          <p>
            After completing my education in Computer Science, I joined a small digital agency where 
            I could wear multiple hats – from frontend development to UX design. This experience was 
            invaluable, teaching me how to approach projects holistically, considering both technical
            constraints and user needs.
          </p>
          
          <p>
            Over the years, I've worked with various organizations, from startups to established 
            companies, helping them build digital products that align with their business goals while
            delighting their users. Each project has taught me something new, contributing to my 
            growth as a developer and designer.
          </p>
          
          <h3>Philosophy & Approach</h3>
          <p>
            I believe that the best digital experiences are those that feel invisible – they work so 
            seamlessly that users don't even notice the technology behind them. This philosophy guides 
            my approach to both development and design.
          </p>
          
          <p>
            Whether I'm coding a complex web application or designing a user interface, I focus on 
            creating solutions that are intuitive, accessible, and performant. I'm particularly 
            passionate about responsive design, ensuring that websites work flawlessly across all devices.
          </p>
          
          <h3>Beyond Work</h3>
          <p>
            When I'm not coding or designing, you might find me exploring new hiking trails, experimenting 
            with photography, or contributing to open-source projects. I'm a firm believer in continuous 
            learning and regularly attend tech conferences and workshops to stay updated with the latest 
            trends and technologies.
          </p>
        </div>
      </section>
      
      {/* Selected Projects Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Selected Projects</h2>
          <Link href="/projects" className="text-neutral-900 dark:text-white hover:underline">
            View All Projects
          </Link>
        </div>
        
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/3 bg-neutral-100 dark:bg-neutral-700 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-neutral-400 dark:text-neutral-500">Project Image</span>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2">E-commerce Platform Redesign</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Complete redesign and development of an e-commerce platform, focusing on improving 
                  user experience and conversion rates. Implemented responsive design, optimized checkout flow,
                  and integrated with payment gateways.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">React</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">Node.js</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">MongoDB</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">Stripe</span>
                </div>
                <a href="#" className="text-neutral-900 dark:text-white hover:underline">View Details →</a>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/3 bg-neutral-100 dark:bg-neutral-700 aspect-video md:aspect-auto flex items-center justify-center">
                <span className="text-neutral-400 dark:text-neutral-500">Project Image</span>
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2">Healthcare Management App</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  Developed a secure healthcare management application that allows patients to book appointments,
                  access medical records, and communicate with healthcare providers. Implemented strict security 
                  measures to ensure data protection.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">Next.js</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">TypeScript</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">PostgreSQL</span>
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-700">Auth0</span>
                </div>
                <a href="#" className="text-neutral-900 dark:text-white hover:underline">View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Interested in Working Together?</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-8 py-4 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
} 