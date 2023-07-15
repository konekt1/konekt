import React from 'react';
import {
  Benefit,
  Faq,
  Hero,
  InternshipProcess,
  Subscribe,
  Testimonial,
  TrustedBy,
} from '../components/Home';

export function Home() {
  return (
    <>
      <Hero />
      <InternshipProcess />
      <Benefit />
      <Testimonial />
      <TrustedBy />
      <Faq />
      <Subscribe />
    </>
  );
}
