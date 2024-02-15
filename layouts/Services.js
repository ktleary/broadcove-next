import { markdownify } from "@lib/utils/textConverter";

/*
use the follow yaml to for the structure

---
title: Services
Last updated: February 06, 2024
description: Maximize your website's potential with JavaScript consulting from industry experts.
draft: false
sections:
  - title: Architecture
    anchor: architecture
    content: Leveraging the full power of React, Node.js, Next.js, and TypeScript, Broadcove specializes in constructing scalable, efficient web and mobile applications that fuel business growth. Our architectural designs prioritize high availability and performance, seamlessly integrating with cloud platforms such as AWS, Azure, and Google Cloud to ensure your applications are resilient and capable of handling peak loads with ease. Our approach encompasses a comprehensive analysis of your business needs, ensuring that the architecture we propose aligns perfectly with your strategic objectives.
    images: ["/images/javascript-1.png", "/images/javascript-2.png", "/images/javascript-3.png"]
  - title: Performance & Standardization
    anchor: performance
    content: Broadcove's performance optimization services are designed to elevate your website's speed and efficiency to the next level. Our experts meticulously identify and address performance bottlenecks, utilizing tools like Google Lighthouse and WebPageTest to analyze current performance metrics. We implement best practices in code splitting, lazy loading, efficient data fetching, and caching strategies to enhance your site's responsiveness and loading times, ensuring users enjoy a seamless experience across all devices.
    ...
    */

function Services({ data }) {
  const { frontmatter } = data;
  const { title, last_updated, description, sections } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <p className="mt-4 text-center">{last_updated}</p>
        <div className="section row  -mt-6">
          {sections.map((section, index) => (
            <div key={index} className="mt-6">
              <div className="p">
                <div className="relative" id={section.anchor}>
                  {markdownify(section.title, "h4")}
                </div>
                {markdownify(section.content, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
