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
    "seo",
    "automation and operations",
    "technical writing",
  ]

  const bio = "I design and run systems that turn complex technologies into high-impact stories"

  // Prepare the sequence for TypeAnimation
  // Each skill will be typed out, then paused. The library handles deletion.
  const animationSequence = skills.reduce((acc, skill) => {
    acc.push(skill); // Type out the skill
    acc.push(2000);  // Pause for 2000ms after typing, before deletion starts
    return acc;
  }, [] as (string | number)[]);

  // To ensure the very last deletion pause doesn't make the loop feel too long before restarting,
  // we might remove the last two items ('' and 300) if skills.length > 0, 
  // as repeat={Infinity} will handle the loop. However, the library might handle this well.
  // Let's test current behavior first.

  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center relative">
      {/* Animated Background Container - will sit behind content */}
      <div className="animated-bg-container absolute inset-0 z-[-1] overflow-hidden">
        {/* Content cleared */}
      </div>

      {/* Main Headline: Tom Goss */}
      <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-textPrimary leading-tight mb-6 text-shadow-subtle">
        Tom Goss
      </h1>
      
      {/* Subtitle: Marketer and Programmer */}
      <h2 className="font-sans text-2xl md:text-3xl mb-4 text-gradient-accent border-b border-blue-500/60 pb-2 inline-block">
        Marketer and Programmer
      </h2>

      {/* "specialising in" text */}
      <p className="font-sans text-xl text-accent mt-0 mb-2">
        specialising in
      </p>

      {/* Container for the animated skills */}
      <div className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold mb-6 h-16 md:h-20 flex items-center justify-center bg-gradient-to-r from-accent to-blue-700 bg-clip-text text-transparent">
        <TypeAnimation
          sequence={animationSequence}
          wrapper="span"
          speed={40}
          omitDeletionAnimation={true}
          repeat={Infinity}
          cursor={true}
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
          className="px-8 py-3 rounded-lg bg-gradient-to-b from-accent to-blue-700 text-white font-medium hover:opacity-90 transition-all duration-300 shadow-md"
        >
          View My Work
        </Link>
        <Link
          href="/articles" // As per spec "Read My Insights"
          className="px-8 py-3 rounded-lg border border-accent text-accent font-medium hover:bg-gradient-to-b hover:from-accent hover:to-blue-700 hover:text-white transition-all duration-300 shadow-md"
        >
          Read My Insights
        </Link>
      </div>

      {/* Subtle Background Animation Element - to be added later */}

      {/* Scroll Down Affordance - to be added later if needed */}
    </section>
  )
} 