import './contact.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Github, Linkedin } from 'react-bootstrap-icons';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
  e.preventDefault();
  setStatus('sending');

  // Send notification to YOU
  emailjs.sendForm('service_z2egxmv', 'template_djdr28q', form.current, 'AbfKQIRzLs76EGzTn')
    .then(() => {
      // Send auto-reply to THEM
      return emailjs.sendForm('service_z2egxmv', 'template_xon75kg', form.current, 'AbfKQIRzLs76EGzTn');
    })
    .then(() => {
      setStatus('success');
      form.current.reset();
    })
    .catch((err) => {
      console.log('EmailJS error:', err);
      setStatus('error');
    });
};

  return (
    <footer className="fariha-footer">
      <div className="footer-inner">

        {/* Top row */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">Fariha Ahmed</Link>
            <p className="footer-tagline">CS student at QMUL bridging design and development.</p>

            <div className="footer-meta">
              <span className="footer-label">Based in</span>
              <span className="footer-value">London, UK</span>
            </div>

            <div className="footer-meta">
              <span className="footer-label">Mail</span>
              <a href="mailto:fariha0625@email.com" className="footer-value footer-email">
                fariha0625@email.com
              </a>
            </div>

            <div className="footer-socials">
              <a href="https://github.com/https-fariha" target="_blank" rel="noreferrer" className="footer-social-link">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/fariha-a-8a247333b" target="_blank" rel="noreferrer" className="footer-social-link">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <nav className="footer-nav">
            <span className="footer-label">Navigation</span>
            <Link to="/"        className="footer-nav-link">Home</Link>
            <Link to="/about"   className="footer-nav-link">About</Link>
            <Link to="/#projects" className="footer-nav-link">Projects</Link>
          </nav>

          {/* Contact form */}
          <form className="footer-form" ref={form} onSubmit={sendEmail}>
            <span className="footer-label">Send a message</span>
            <input type="text"  name="from_name"  placeholder="Your name"    className="footer-input" required />
            <input type="email" name="from_email" placeholder="Your email"   className="footer-input" required />
            <input type="text"  name="subject"    placeholder="Subject"      className="footer-input" required />
            <textarea           name="message"    placeholder="Message"      className="footer-input footer-textarea" rows="3" required />
            <button type="submit" className="footer-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send →'}
            </button>
            {status === 'success' && <p className="footer-success">Sent! I'll be in touch soon.</p>}
            {status === 'error'   && <p className="footer-error">Something went wrong — try emailing directly. (fariha0625@gmail.com)</p>}
          </form>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Fariha Ahmed</span>
          <span>Built with React</span>
        </div>

      </div>
    </footer>
  );
}