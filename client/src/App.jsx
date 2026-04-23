import { useState } from 'react';

const projects = [
  {
    title: 'SARS Website Mockup',
    description: 'Frontend mockup of a tax eFiling interface. A practice project built using HTML, CSS, and JavaScript to demonstrate UI/UX design and responsive web development.',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    source: 'https://github.com/Sinokuhle1Spelman/Sars-Website-Mockup',
    demo: 'https://sinokuhle1spelman.github.io/Sars-Website-Mockup/',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=400&h=250&fit=crop'
  },
  {
    title: 'Flask Dashboard',
    description: 'A simple and clean Flask-based dashboard web application with user authentication, task management, secure password hashing, and a responsive UI built with Bootstrap.',
    tags: ['Flask', 'Python', 'SQLite', 'Bootstrap'],
    source: 'https://github.com/Sinokuhle1Spelman/Flask-Dashboard',
    demo: 'https://github.com/Sinokuhle1Spelman/Flask-Dashboard',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React and Node.js featuring project showcases, work experience, social links, downloadable resume, and a working contact form.',
    tags: ['React', 'Node.js', 'Express', 'Vite'],
    source: 'https://github.com/Sinokuhle1Spelman/portfolio',
    demo: 'https://sinokuhle-portfolio.vercel.app/',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop'
  }
];

const socialLinks = [
  {
    title: 'GitHub',
    url: 'https://github.com/Sinokuhle1Spelman',
    label: 'View source code'
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sinokuhle-spelman-9a9731360/',
    label: 'Connect professionally'
  }
];

const experience = [
  {
    role: 'Fullstack Developer / UI/UX Designer (WIL)',
    company: 'Binary Bits Technologies',
    location: 'Reginald av, Pretoria North',
    startDate: '18 August 2025',
    endDate: '18 February 2026',
    highlights: [
      'Developed the Khumbulekhaya platform using Django, building core business logic to manage member services and investments.',
      'Integrated Chart.js and KPI dashboards to provide actionable insights, significantly improving data readability for administrators.',
      'Implemented a mobile-first responsive strategy, successfully migrating complex data tables to mobile-friendly card layouts.',
      'Ensured 100% functional accuracy through constant testing and debugging while collaborating in daily stand ups and code reviews.'
    ]
  }
];

const education = [
  {
    degree: 'Diploma in Information Technology',
    institution: 'Belgium Campus ITversity',
    location: 'Pretoria',
    startDate: '2023',
    endDate: '2025'
  },
  {
    degree: 'Dimension Data Saturday School Program',
    institution: 'Dimension Data',
    location: 'South Africa',
    startDate: '2020',
    endDate: '2022',
    note: 'Full Bursary Recipient'
  },
  {
    degree: 'Cisco NetAcad Certification',
    institution: 'Cisco Academy',
    location: 'South Africa',
    startDate: '2020',
    endDate: '2022'
  },
  {
    degree: 'National Senior Certificate',
    institution: 'Ethembeni Enrichment Centre',
    location: 'South Africa',
    startDate: '2018',
    endDate: '2022'
  }
];

const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'JavaScript', icon: '✨' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'C++', icon: '💠' },
  { name: 'C#', icon: '🔷' },
  { name: 'HTML5', icon: '🔴' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Express', icon: '⚙️' },
  { name: 'Django', icon: '🥁' },
  { name: 'REST APIs', icon: '🌐' },
  { name: 'Responsive Design', icon: '📱' },
  { name: 'Git & GitHub', icon: '🐙' },
  { name: 'Chart.js', icon: '📊' },
  { name: 'Bootstrap', icon: '🎪' },
  { name: 'Figma', icon: '🖌️' },
  { name: 'Vite', icon: '⚡' },
  { name: 'Database Design', icon: '🗂️' },
  { name: 'Problem Solving', icon: '🧠' },
  { name: 'Team Collaboration', icon: '👥' }
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m Bruno, Sinokuhle\'s AI assistant. How can I help you learn more about their portfolio?' }
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
    setChatInput('');

    const responses = {
      'skills': 'Sinokuhle is skilled in React, Node.js, JavaScript, Python, Java, HTML, CSS, SQL, and many modern frameworks. Check the skills section for a full list!',
      'projects': 'View the projects section to see Sinokuhle\'s work including the SARS Website Mockup, Flask Dashboard, and this Portfolio.',
      'experience': 'Sinokuhle completed a 6-month WIL internship at Binary Bits Technologies working on the Khumbulekhaya platform with Django, Chart.js, and mobile-first design.',
      'contact': 'You can reach out through the contact form below, or connect via GitHub and LinkedIn. Email: sinokuhle13@gmail.com',
      'education': 'Sinokuhle holds a Diploma in IT from Belgium Campus ITVarsity and is a recipient of the Dimension Data Saturday School Bursary.',
      'hi': 'Hello! How can I assist you today?'
    };

    const lowerInput = userMessage.toLowerCase();
    let botResponse = 'I\'m not sure about that. Feel free to ask about skills, projects, experience, education, or contact information!';

    for (const [key, response] of Object.entries(responses)) {
      if (lowerInput.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setTimeout(() => {
      setChatMessages((prev) => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Thank you — your message has been sent. I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus(errorData.error || 'There was a problem sending your message.');
      }
    } catch (error) {
      setStatus('Unable to send message right now. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Hello, I’m</p>
            <h1>Sinokuhle Spelman</h1>
            <p className="subtitle">Software Developer • Web Developer • Database Developer • Programmer • UI/UX Designer</p>
            <p className="tagline">Graduate at Belgium Campus ITVarsity</p>
            <div className="hero-actions">
              <a href="#projects" className="button primary">View Projects</a>
              <a href="#contact" className="button secondary">Contact Me</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/WhatsApp Image 2026-03-26 at 12.25.44 AM.jpeg" alt="Sinokuhle Spelman" />
          </div>
        </div>
      </header>

      <main className="content">
        <section id="about" className="section panel">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Diploma in Information Technology graduate with strong practical experience gained through academic projects and professional industry placement. I am a Software Developer specializing in web development and programming, with hands-on experience building responsive web applications and CRUD systems using HTML, CSS, JavaScript, Python, Java, and modern frameworks.
              </p>
              <p>
                Recently, I completed my 6-month Work Integrated Learning (WIL) internship at Binary Bits Technologies, where I enhanced the Khumbulekhaya Web Application by integrating Chart.js for data visualization and implementing mobile-first UI/UX strategies. I am a logical problem-solver with strong database management skills (SQL), and a collaborative team player proven to learn new technologies quickly and deliver high-quality outcomes on time.
              </p>
              <p>
                As a recipient of the Dimension Data Saturday School Bursary Program—earned through hard work and dedication during high school—I was given the opportunity to attend Belgium Campus ITVarsity, where I was chosen as one of the Residence Representatives, showcasing my leadership skills and trustworthiness. Now, I am seeking to leverage and advance my technical expertise and professional experience in a challenging development role.
              </p>
            </div>
            <div className="about-image">
              <img src="/Sira.jpeg" alt="Sinokuhle Spelman" />
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skill-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-chip">
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section panel">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                {project.image && (
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">Live Demo</a>
                    <a href={project.source} target="_blank" rel="noreferrer" className="project-link">Source Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section panel">
          <h2>Work Experience</h2>
          <div className="experience-list">
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company-name">{job.company}</p>
                  </div>
                  <span className="date-range">{job.startDate} – {job.endDate}</span>
                </div>
                <p className="location">{job.location}</p>
                <ul className="highlights">
                  {job.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section panel">
          <h2>Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-header">
                  <div>
                    <h3>{edu.degree}</h3>
                    <p className="institution-name">{edu.institution}</p>
                  </div>
                  <span className="date-range">{edu.startDate} – {edu.endDate}</span>
                </div>
                <p className="location">{edu.location}</p>
                {edu.note && <p className="education-note">{edu.note}</p>}
              </div>
            ))}
          </div>
        </section>

        <section id="socials" className="section">
          <h2>Socials</h2>
          <div className="social-grid">
            {socialLinks.map((social) => (
              <a key={social.title} className="social-card" href={social.url} target="_blank" rel="noreferrer">
                <strong>{social.title}</strong>
                <p>{social.label}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="resume" className="section panel">
          <h2>Resume</h2>
          <p>Download my curriculum vitae to review my complete qualifications, experience, and achievements.</p>
          <a className="button primary" href="/SINOKUHLE SPELMAN CURICULUM VITAE (JB).pdf" download>
            Download Resume
          </a>
        </section>

        <section id="contact" className="section panel">
          <h2>Contact</h2>
          <p>If you’d like to collaborate or learn more, send a message through the form below.</p>

          <div className="contact-grid">
            <div>
              <strong>Email</strong>
              <p>sinokuhle13@gmail.com</p>
            </div>
            <div>
              <strong>Location</strong>
              <p>South Africa</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Name
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label>
              Subject
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project, collaboration or question"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea"
                rows="6"
                required
              />
            </label>

            <button className="button primary" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send Message'}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React and Node.js by Sinokuhle Liskhanya Spelman.</p>
      </footer>

      <button className="chat-toggle" onClick={() => setChatOpen(!chatOpen)}>
        💬
      </button>

      {chatOpen && (
        <div className="chat-container">
          <div className="chat-header">
            <h3>Bruno 🤖</h3>
            <button className="chat-close" onClick={() => setChatOpen(false)}>✕</button>
          </div>
          <div className="chat-messages">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <form className="chat-form" onSubmit={handleChatSubmit}>
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask me anything..."
              className="chat-input"
            />
            <button type="submit" className="chat-submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
