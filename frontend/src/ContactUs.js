import React, { useState, useEffect } from 'react';
import abtimg from './images/combo2.png';
import './ContactUs.css';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email.trim() === '') return;

    setLoading(true);
    try {
      const response = await fetch('https://vikahrubbers.com/subscribe.php', {  // <-- replace with your PHP URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();

      if (result.status === 'success') {
        setSubscribed(true);
        setEmail('');
      } else {
        alert(result.message || 'Subscription failed');
      }
    } catch (err) {
      alert('Subscription failed. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="contact-page">
      <div className="top-banner" style={{ backgroundImage: `url(${abtimg})` }} />

      <div className="contact-content">
        <div className="contact-text">
          <h2>Contact Us</h2>
          <p className="mb-3"><strong>VIKAH RUBBERS PRIVATE LIMITED</strong></p>

          <p><strong>Admin Office:</strong><br />
            #406, 4th Floor, Patel Towers, Above EasyBuy, Beside Nagole RTO Office,<br />
            Nagole, Hyderabad, Telangana - 500068
          </p>

          <p><strong>Unit Address:</strong><br />
            Shed No.1 in Plot No. 14 (site-A),IP Rampur, Kazipet Mandal, Hanumakonda<br />
            Telangana - 506151
          </p>

          <p><strong>Phone:</strong> +91 4049471616</p>
          <p><strong>Email:</strong> <a href="mailto:info@vikahrubbers.com" style={{ textDecoration: 'none' }}>info@vikahrubbers.com</a></p>

          <h3>Business Hours</h3>
          <ul>
            <li>Monday - Saturday: 10:00 AM – 6:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="contact-map">
          <h3>Find Us on Maps</h3>

          {/* Patel Towers Location */}
          <div style={{ marginBottom: '24px' }}>
            <iframe
              title="Patel Towers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.299318499121!2d78.5549449239801!3d17.368280153357624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99eeab8a7795%3A0x89760778e2498478!2sPatel%20Towers!5e1!3m2!1sen!2sin!4v1749105069085!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              style={{
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* SSR Granites Location */}
          <div>
            <iframe
              title="SSR Granites Rampur Warangal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.466499610935!2d79.46280399214817!3d17.94757037314131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a33537643652aeb%3A0xf82bde918a1fc2da!2sPrime%20India%20Recycling%20Centre!5e1!3m2!1sen!2sin!4v1766121514439!5m2!1sen!2sin" 
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              style={{
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        </div>

      </div>

      <div className="contact-bottom-cta">
        <h3>Stay Connected</h3>
        <p>Subscribe to our newsletter for the latest updates and offers.</p>
        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Your email address"
            required
            aria-label="Email address for newsletter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={subscribed || loading}
          />
          <button type="submit" disabled={subscribed || loading}>
            {loading ? 'Submitting...' : (subscribed ? 'Subscribed' : 'Subscribe')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
