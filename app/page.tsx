'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';

export default function Home() {
  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    // Animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.skill-card, .project-card, .article-card, .pricing-card'
    );
    
    animatedElements.forEach((el) => {
      (el as HTMLElement).style.opacity = '0';
      (el as HTMLElement).style.transform = 'translateY(20px)';
      (el as HTMLElement).style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
    };
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 bg-white border-b-4 border-black">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-success border-4 border-black px-4 py-2 font-heading font-bold text-sm mb-6 shadow-brutal-sm">
              AVAILABLE FOR HIRE
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Full Stack Developer<br />
              <span className="text-primary">& Technical Writer</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700">
              Building scalable web & mobile applications with MERN stack and React Native.
              Crafting high-quality technical content that developers actually want to read.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#pricing"
                className="font-heading font-bold text-base px-8 py-4 border-4 border-black bg-primary text-white shadow-brutal-md hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-brutal inline-block text-center"
              >
                View Services
              </a>
              <a
                href="#projects"
                className="font-heading font-bold text-base px-8 py-4 border-4 border-black bg-white text-dark shadow-brutal-md hover:bg-accent hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-brutal inline-block text-center"
              >
                See My Work
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <Image
              src="https://images.unsplash.com/photo-1759661990336-51bd4b951fea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxkZXZlbG9wZXIlMjBjb2RpbmclMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwwfDB8fHwxNzYwMTk3MjkwfDA&ixlib=rb-4.1.0&q=85"
              alt="Modern developer workspace with neon lighting - Jakub Żerdzicki on Unsplash"
              width={600}
              height={400}
              className="w-full h-auto border-4 border-black shadow-brutal"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative">
            What I Do Best
            <span className="block w-[100px] h-[6px] bg-primary mx-auto mt-4 border-2 border-black"></span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="skill-card bg-[#FFE5E5] border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal">
              <div className="w-[60px] h-[60px] bg-white border-4 border-black flex items-center justify-center mb-6 shadow-brutal-sm">
                <span className="material-symbols-outlined text-[32px] text-dark">code</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">MERN Stack Development</h3>
              <p className="text-base text-gray-700">
                Full-stack web applications using MongoDB, Express.js, React, and Node.js.
                Building scalable, performant, and maintainable solutions.
              </p>
            </div>

            <div className="skill-card bg-[#E5F9F7] border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal">
              <div className="w-[60px] h-[60px] bg-white border-4 border-black flex items-center justify-center mb-6 shadow-brutal-sm">
                <span className="material-symbols-outlined text-[32px] text-dark">smartphone</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">React Native</h3>
              <p className="text-base text-gray-700">
                Cross-platform mobile applications for iOS and Android.
                Native performance with JavaScript efficiency.
              </p>
            </div>

            <div className="skill-card bg-[#FFF9E5] border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal">
              <div className="w-[60px] h-[60px] bg-white border-4 border-black flex items-center justify-center mb-6 shadow-brutal-sm">
                <span className="material-symbols-outlined text-[32px] text-dark">edit_note</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Technical Writing</h3>
              <p className="text-base text-gray-700">
                Clear, engaging technical content for developers.
                Tutorials, documentation, and articles that actually help.
              </p>
            </div>

            <div className="skill-card bg-[#F0E5FF] border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal">
              <div className="w-[60px] h-[60px] bg-white border-4 border-black flex items-center justify-center mb-6 shadow-brutal-sm">
                <span className="material-symbols-outlined text-[32px] text-dark">cloud_sync</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">DevOps</h3>
              <p className="text-base text-gray-700">
                CI/CD pipelines, Docker, Kubernetes, and cloud deployment.
                Automating workflows for faster, reliable releases.
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-24 pt-16 border-t-4 border-black">
            <h3 className="font-heading text-3xl font-bold text-center mb-2">My Tech Stack</h3>
            <p className="text-center text-base text-gray-600 mb-12">Technologies I work with daily</p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              {[
                { icon: '⚛️', name: 'React' },
                { icon: '▲', name: 'Next.js' },
                { icon: '📱', name: 'React Native' },
                { icon: '🟢', name: 'Node.js' },
                { icon: '⚡', name: 'Express' },
                { icon: '🍃', name: 'MongoDB' },
                { icon: '🐬', name: 'MySQL' },
                { icon: '📘', name: 'TypeScript' },
                { icon: '📜', name: 'JavaScript' },
                { icon: '🅰️', name: 'Angular' },
                { icon: '☁️', name: 'AWS' },
                { icon: '🐳', name: 'Docker' },
                { icon: '☸️', name: 'Kubernetes' },
                { icon: '🔧', name: 'Terraform' },
                { icon: '🤖', name: 'Ansible' },
                { icon: '🔨', name: 'Jenkins' },
                { icon: '📊', name: 'Prometheus' },
                { icon: '📈', name: 'Grafana' },
                { icon: '💻', name: 'VS Code' },
                { icon: '🐙', name: 'GitHub' },
                { icon: '🦊', name: 'GitLab' },
                { icon: '📮', name: 'Postman' },
                { icon: '🎨', name: 'Figma' },
                { icon: '🐧', name: 'Linux' },
                { icon: '🧪', name: 'Jest' },
                { icon: '🤖', name: 'Selenium' },
                { icon: '🔒', name: 'Burp Suite' },
                { icon: '📊', name: 'Analytics' },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-white border-[3px] border-black px-6 py-4 inline-flex items-center gap-2 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md hover:bg-accent transition-brutal cursor-default"
                >
                  <span className="text-2xl leading-none">{tech.icon}</span>
                  <span className="font-heading text-[15px] font-bold text-dark whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative">
            Featured Projects
            <span className="block w-[100px] h-[6px] bg-primary mx-auto mt-4 border-2 border-black"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description:
                  'Full-featured e-commerce platform with payment integration, inventory management, and real-time order tracking. Built with MERN stack.',
                tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
              },
              {
                title: 'Task Management App',
                description:
                  'Cross-platform mobile app for team collaboration and task tracking. Features real-time updates and offline support.',
                tags: ['React Native', 'Firebase', 'Redux'],
              },
              {
                title: 'Developer Portfolio Builder',
                description:
                  'SaaS platform for developers to create stunning portfolios in minutes. Includes templates, GitHub integration, and analytics.',
                tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
              },
              {
                title: 'API Documentation Generator',
                description:
                  'Automated tool for generating beautiful API documentation from OpenAPI specs. Supports multiple themes and interactive examples.',
                tags: ['Node.js', 'Express', 'Swagger'],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="project-card bg-light border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading text-[22px] font-bold flex-1">{project.title}</h3>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-4 border-black p-2 flex items-center justify-center no-underline text-dark shadow-[3px_3px_0px_#000000] hover:bg-secondary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_#000000]"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                  </a>
                </div>
                <p className="text-[15px] mb-6 text-gray-700">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-white border-2 border-black px-3 py-1 font-heading text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 md:py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative">
            Latest Articles
            <span className="block w-[100px] h-[6px] bg-primary mx-auto mt-4 border-2 border-black"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                publication: 'freeCodeCamp',
                date: 'Dec 2024',
                title: 'Building Scalable Microservices with Node.js',
                excerpt:
                  'A comprehensive guide to architecting and deploying microservices using Node.js, Docker, and Kubernetes. Learn best practices for service communication...',
              },
              {
                publication: 'Dev.to',
                date: 'Nov 2024',
                title: 'React Native Performance Optimization Techniques',
                excerpt:
                  'Discover proven strategies to boost your React Native app performance. From lazy loading to native module optimization, cover it all...',
              },
              {
                publication: 'Medium',
                date: 'Oct 2024',
                title: 'State Management in Modern React Applications',
                excerpt:
                  'Comparing Redux, Context API, Zustand, and Recoil. When to use each solution and how to implement them effectively in your projects...',
              },
              {
                publication: 'Hashnode',
                date: 'Sep 2024',
                title: 'Complete Guide to MongoDB Aggregation Pipeline',
                excerpt:
                  "Master MongoDB's powerful aggregation framework with practical examples. Learn to write complex queries and optimize database performance...",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="article-card bg-white border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal"
              >
                <div className="flex justify-between mb-4 text-sm">
                  <span className="font-heading font-bold text-primary">{article.publication}</span>
                  <span className="text-gray-600">{article.date}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{article.title}</h3>
                <p className="text-[15px] text-gray-700 mb-6">{article.excerpt}</p>
                <a
                  href="#"
                  className="font-heading font-bold text-dark no-underline inline-flex items-center gap-1 border-b-[3px] border-black hover:text-primary"
                >
                  Read Article
                  <span className="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative">
            Services & Pricing
            <span className="block w-[100px] h-[6px] bg-primary mx-auto mt-4 border-2 border-black"></span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'code',
                title: 'MVP Development',
                price: '$900',
                features: [
                  'Full-stack web application',
                  'Responsive design',
                  'Database setup',
                  'API integration',
                  '2 weeks delivery',
                  '1 month support',
                ],
                bg: 'bg-[#FFE5E5]',
              },
              {
                icon: 'edit_note',
                title: 'Technical Blog',
                price: '$500',
                features: [
                  '2000-3000 words',
                  'SEO optimized',
                  'Code examples',
                  'Custom graphics',
                  '1 week delivery',
                  '2 revisions included',
                ],
                bg: 'bg-[#FFF9E5]',
              },
              {
                icon: 'description',
                title: 'Technical Documentation',
                price: '$1000',
                features: [
                  'Complete API docs',
                  'User guides',
                  'Code samples',
                  'Interactive examples',
                  '2 weeks delivery',
                  'Unlimited revisions',
                ],
                bg: 'bg-[#E5F9F7]',
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`pricing-card ${service.bg} border-4 border-black p-8 shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-brutal`}
              >
                <div className="w-[60px] h-[60px] bg-white border-4 border-black flex items-center justify-center mb-6 shadow-brutal-sm">
                  <span className="material-symbols-outlined text-[32px] text-dark">{service.icon}</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">{service.title}</h3>
                <div className="font-heading text-5xl font-bold text-primary mb-6">{service.price}</div>
                <ul className="list-none mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="py-2 border-b-2 border-black text-[15px] last:border-b-0"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="w-full bg-dark text-white font-heading font-bold text-base px-8 py-4 border-4 border-black shadow-brutal-md hover:bg-primary hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-brutal inline-block text-center"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12 relative">
            Let&apos;s Work Together
            <span className="block w-[100px] h-[6px] bg-primary mx-auto mt-4 border-2 border-black"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-8 text-gray-700">
                Have a project in mind? Need technical content? Let&apos;s discuss how I can help bring your
                ideas to life.
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4 text-base">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                  <span>hello@developer.com</span>
                </div>
                <div className="flex items-center gap-4 text-base">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                  <span>Available Worldwide (Remote)</span>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: 'code', label: 'GitHub', href: 'https://github.com' },
                  { icon: 'work', label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: 'tag', label: 'Twitter', href: 'https://twitter.com' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-4 border-black px-6 py-4 no-underline text-dark font-heading font-bold flex items-center gap-2 shadow-brutal-sm hover:bg-secondary hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000000]"
                  >
                    <span className="material-symbols-outlined">{social.icon}</span>
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-white border-4 border-black p-8 shadow-brutal">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-heading font-bold text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="font-body text-base p-4 border-4 border-black bg-light focus:outline-none focus:bg-white focus:shadow-brutal-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-heading font-bold text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="font-body text-base p-4 border-4 border-black bg-light focus:outline-none focus:bg-white focus:shadow-brutal-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="font-heading font-bold text-sm">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="font-body text-base p-4 border-4 border-black bg-light focus:outline-none focus:bg-white focus:shadow-brutal-sm"
                  >
                    <option value="">Select a service</option>
                    <option value="mvp">MVP Development</option>
                    <option value="blog">Technical Blog</option>
                    <option value="docs">Technical Documentation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-heading font-bold text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="font-body text-base p-4 border-4 border-black bg-light focus:outline-none focus:bg-white focus:shadow-brutal-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-heading font-bold text-base px-8 py-4 border-4 border-black shadow-brutal-md hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0px_#000000] transition-brutal"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 border-t-4 border-black">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <div className="font-heading text-2xl font-bold mb-4">DEV.PORTFOLIO</div>
              <p className="text-gray-400">Building the future, one line of code at a time.</p>
            </div>

            <div className="flex gap-12">
              <div>
                <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
                <ul className="list-none">
                  {['Home', 'Skills', 'Projects', 'Articles'].map((item, index) => (
                    <li key={index} className="mb-2">
                      <a href={`#${item.toLowerCase()}`} className="text-gray-400 no-underline hover:text-primary">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-lg font-bold mb-4">Services</h4>
                <ul className="list-none">
                  {['MVP Development', 'Technical Writing', 'Documentation', 'Contact'].map((item, index) => (
                    <li key={index} className="mb-2">
                      <a
                        href={item === 'Contact' ? '#contact' : '#pricing'}
                        className="text-gray-400 no-underline hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t-2 border-gray-700 text-gray-500">
            <p>&copy; 2024 Developer Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}