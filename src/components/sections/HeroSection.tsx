'use client'

import Link from 'next/link'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

// Define the props for the HeroSection, if any are needed from the parent
// For now, content is hardcoded or managed within this component
// type HeroSectionProps = {}

export default function HeroSection(/* props: HeroSectionProps */) {
  const skills = [
    "content strategy",
    "product marketing",
    "SEO",
    "Automation and operations",
    "technical writing",
  ]

  const bio = "I design and run systems that turn complex technologies into high-impact stories"

  // Prepare the sequence for TypeAnimation
  // Each skill will be typed out, then paused, then deleted (implicitly by the next skill typing)
  // We add a pause (e.g., 1000ms) after each skill.
  const animationSequence = skills.reduce((acc, skill) => {
    acc.push(skill);
    acc.push(2000);
    return acc;
  }, [] as (string | number)[]);

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center">
      {/* Main Headline: Tom Goss */}
      <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-textPrimary leading-tight mb-4">
        Tom Goss
      </h1>
      
      {/* Subtitle: Marketer and Programmer */}
      <h2 className="font-sans text-2xl md:text-3xl text-textPrimary mb-6">
        Marketer and Programmer
      </h2>

      {/* "specialising in" text */}
      <p className="font-sans text-xl text-textPrimary mt-2 mb-3">
        specialising in
      </p>

      {/* Container for the animated skills */}
      <div className="font-sans text-2xl md:text-3xl lg:text-4xl text-accent font-bold mb-6 h-16 md:h-20 flex items-center justify-center">
        <TypeAnimation
          sequence={animationSequence}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          cursor={false}
          style={{ display: 'inline-block' }} 
        />
      </div>
      
      {/* Concise Bio */}
      <p className="font-sans mt-8 text-xl text-textPrimary max-w-2xl mx-auto mb-8">
        {bio}
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/projects"
          className="px-8 py-3 rounded-lg bg-accent text-white font-medium hover:opacity-90 transition-all duration-300"
        >
          View My Work
        </Link>
        <Link
          href="/articles" // As per spec "Read My Insights"
          className="px-8 py-3 rounded-lg border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-all duration-300"
        >
          Read My Insights
        </Link>
      </div>

      {/* Subtle Background Animation Element - to be added later */}

      {/* Scroll Down Affordance - to be added later if needed */}
    </section>
  )
} 