'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Load and execute the client-side JavaScript
    const script = document.createElement('script')
    script.src = '/script.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="main-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative Western Elements */}
        <div className="decorative-element top-left">
          <svg viewBox="0 0 100 100" className="western-svg">
            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 30 50 Q 50 30 70 50 Q 50 70 30 50" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="decorative-element bottom-right">
          <svg viewBox="0 0 100 100" className="western-svg">
            <path d="M 50 10 L 90 90 L 10 90 Z" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="hero-content">
          {/* Badge */}
          <div className="badge">CELEBRATION OF FATHERS</div>

          {/* Main Title */}
          <h1 className="main-title">Father&apos;s Night</h1>

          {/* Western Accent */}
          <div className="western-accent">
            <div className="accent-line"></div>
            <span className="cowboy-emoji">🤠</span>
            <div className="accent-line"></div>
          </div>

          {/* Event Details */}
          <div className="event-card">
            <div className="event-details-grid">
              <div className="detail-item">
                <div className="detail-emoji">📅</div>
                <p className="detail-label">Date</p>
                <p className="detail-value">June 14, 2026</p>
              </div>
              <div className="detail-item">
                <div className="detail-emoji">🕐</div>
                <p className="detail-label">Time</p>
                <p className="detail-value">4:30 PM</p>
              </div>
              <div className="detail-item">
                <div className="detail-emoji">👔</div>
                <p className="detail-label">Attire</p>
                <p className="detail-value">Cowboy & Cowgirl</p>
              </div>
            </div>

            {/* Location */}
            <div className="location-box">
              <p className="location-label">📍 Location</p>
              <p className="location-name">Pentecostal Missionary Church of Christ 4th Watch</p>
              <p className="location-address">Sanicolas, Villasis, Pangasinan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="program-section">
        <div className="section-container">
          <h2 className="section-title">Event Highlights</h2>
          <div className="title-underline"></div>

          <div className="highlights-grid">
            <div className="highlight-card">
              <h3 className="highlight-title">Special Presentations</h3>
              <p className="highlight-description">Youth presentations showcasing talents and sharing heartfelt messages honoring our fathers.</p>
            </div>

            <div className="highlight-card">
              <h3 className="highlight-title">Talent Showcase</h3>
              <p className="highlight-description">Individual and group performances celebrating the talents and character of fathers in our community.</p>
            </div>

            <div className="highlight-card">
              <h3 className="highlight-title">Best Father Award</h3>
              <p className="highlight-description">Recognition and celebration of outstanding fathers who exemplify dedication and love for their families.</p>
            </div>

            <div className="highlight-card">
              <h3 className="highlight-title">Tribute to Fathers</h3>
              <p className="highlight-description">A heartfelt tribute honoring all fathers and the profound impact they have on our lives and faith.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verse Section */}
      <section className="bible-section">
        <div className="bible-container">
          <h2 className="section-title">A Message of Honor</h2>
          <div className="title-underline"></div>

          <div className="bible-card">
            <p className="bible-quote">&quot;</p>
            <p className="bible-text">Honor your father and your mother, so that you may live long in the land the Lord your God is giving you.</p>
            <p className="bible-reference">Exodus 20:12</p>
            <p className="bible-version">New International Version (NIV)</p>
          </div>

          <p className="bible-description">This Father&apos;s Night is more than a celebration—it is a spiritual gathering where we honor the fathers in our lives, recognizing their sacrifices and the values they instill in us. We gather in faith, gratitude, and genuine appreciation for all that fathers do.</p>
        </div>
      </section>

      {/* Father Images Gallery Section */}
      <section className="gallery-section">
        <div className="section-container">
          <h2 className="section-title">Celebrating Fathers</h2>
          <div className="title-underline"></div>

          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="image-wrapper">
                <img src="father-1.png" alt="Father celebrating" className="gallery-image" />
                <div className="image-overlay"></div>
                <div className="image-caption">Strength & Love</div>
              </div>
            </div>

            <div className="gallery-card">
              <div className="image-wrapper">
                <img src="father-2.png" alt="Father with family" className="gallery-image" />
                <div className="image-overlay"></div>
                <div className="image-caption">Family Bonds</div>
              </div>
            </div>

            <div className="gallery-card">
              <div className="image-wrapper">
                <img src="father-3.png" alt="Fathers community" className="gallery-image" />
                <div className="image-overlay"></div>
                <div className="image-caption">Community Spirit</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative animated circles */}
        <div className="pulse-circle pulse-1"></div>
        <div className="pulse-circle pulse-2"></div>
      </section>

      {/* Final Call to Action Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Join Us for an Unforgettable Evening</h2>
          <p className="cta-description">Celebrate fathers with food, fellowship, laughter, and heartfelt tributes. Bring your family and share in this special occasion.</p>

          <div className="cta-info">
            <p className="cta-date">June 14, 2026 at 4:30 PM</p>
            <p className="cta-location">Pentecostal Missionary Church of Christ - 4th Watch</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-main">Father&apos;s Night 2026</p>
        <p className="footer-sub">Celebrating Fathers, Faith, and Family | Pentecostal Missionary Church of Christ 4th Watch</p>
      </footer>
    </main>
  )
}
