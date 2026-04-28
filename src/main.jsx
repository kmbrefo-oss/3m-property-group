import React from 'react'
import { createRoot } from 'react-dom/client'
import { Building2, CheckCircle, Phone, Mail, MapPin, ShieldCheck, Handshake, Wrench, FileCheck2, KeyRound } from 'lucide-react'
import './style.css'

function App() {
  return (
    <div className="site">
      <header className="header">
        <div className="brand">
          <img src="/3m-logo.svg" alt="3M Property Group logo" />
          <div>
            <strong>3M Property Group</strong>
            <span>Council & Landlord Housing Solutions</span>
          </div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#councils">Councils</a>
          <a href="#landlords">Landlords</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn small" href="#contact">Make an enquiry</a>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="pill"><ShieldCheck size={16}/> Trusted housing support</p>
          <h1>Helping councils secure safe homes. Helping landlords let with confidence.</h1>
          <p>3M Property Group connects local authorities with suitable accommodation while supporting landlords with professional tenant placement, property care and ongoing management.</p>
          <div className="actions">
            <a className="btn" href="#contact">Speak to our team</a>
            <a className="btn ghost" href="#services">Explore services</a>
          </div>
        </div>
        <div className="heroCard">
          <h2>Our focus</h2>
          <ul>
            <li><CheckCircle/> Suitable accommodation for council referrals</li>
            <li><CheckCircle/> Professional landlord property management</li>
            <li><CheckCircle/> Compliance, inspections and tenant care</li>
          </ul>
        </div>
      </section>

      <section className="trust">
        {['Council referral support','Landlord property partnerships','Tenant onboarding and care','Inspections and reporting'].map(item => <div key={item}><CheckCircle/> {item}</div>)}
      </section>

      <section id="services" className="section">
        <p className="eyebrow">What we do</p>
        <h2>End-to-end housing support for councils and landlords.</h2>
        <div className="grid three">
          <Card icon={<Handshake/>} title="Council Partnerships" text="We work with local authority housing teams to source accommodation, coordinate referrals and support smooth placements." />
          <Card icon={<Building2/>} title="Landlord Services" text="We help landlords secure reliable occupancy, manage communication and reduce the pressure of day-to-day letting." />
          <Card icon={<KeyRound/>} title="Tenant Placement" text="We support the journey from property match to move-in, helping everyone understand expectations from day one." />
          <Card icon={<Wrench/>} title="Repairs Coordination" text="We help report, track and coordinate maintenance so issues are dealt with professionally and quickly." />
          <Card icon={<FileCheck2/>} title="Compliance Support" text="We keep documentation, safety checks and housing standards front of mind throughout the process." />
          <Card icon={<ShieldCheck/>} title="Property Inspections" text="Regular checks help maintain standards, protect landlords and ensure homes remain suitable for residents." />
        </div>
      </section>

      <section id="councils" className="section blue split">
        <div>
          <p className="eyebrow">For councils</p>
          <h2>A responsive housing partner for local authority teams.</h2>
          <p>We understand the pressures housing teams face. 3M Property Group helps bridge the gap between urgent housing need and suitable accommodation.</p>
        </div>
        <div className="panel">
          <h3>Council support includes:</h3>
          <ul>
            <li><CheckCircle/> Suitable property sourcing</li>
            <li><CheckCircle/> Clear referral communication</li>
            <li><CheckCircle/> Tenant support and onboarding</li>
            <li><CheckCircle/> Ongoing liaison</li>
          </ul>
        </div>
      </section>

      <section id="landlords" className="section split">
        <div className="panel dark">
          <h3>Why landlords work with us</h3>
          <ul>
            <li><CheckCircle/> Reduced void periods</li>
            <li><CheckCircle/> Professional management</li>
            <li><CheckCircle/> Protected property standards</li>
            <li><CheckCircle/> Long-term relationships</li>
          </ul>
        </div>
        <div>
          <p className="eyebrow">For landlords</p>
          <h2>Let your property with more structure and less stress.</h2>
          <p>We support landlords who want a more reliable route to occupancy, better communication and a partner who understands property standards and tenant care.</p>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Our process</p>
        <h2>Simple, clear and accountable.</h2>
        <div className="grid four">
          {['Understand','Match','Prepare','Manage'].map((x,i)=><div className="step" key={x}><span>0{i+1}</span><h3>{x}</h3><p>We keep everyone updated at every stage of the housing journey.</p></div>)}
        </div>
      </section>
      <section id="about" className="section about">
  <p className="eyebrow">Our story</p>
  <h2>Why this work means everything to me</h2>

  <blockquote>
    “I was still a child when I learned that home is not something you can take for granted.”
  </blockquote>

  <p>
    Some of my earliest memories aren’t of school runs or weekend trips — they’re of watching my mum sit at the kitchen table, surrounded by letters she didn’t want me to see.
  </p>

  <p>
    I was under twelve, but I understood enough to know something was very wrong. We were facing eviction.
  </p>

  <p>
    As a single parent, my mum worked hard to keep a roof over our heads. But the private rental market can be unforgiving — insecure tenancies, unpredictable landlords, and homes that fall short of what any family deserves.
  </p>

  <p>
    We were fortunate. We found stable accommodation in time. But I never forgot what it felt like to stand on that edge — and I never forgot the families who didn’t find their footing before they fell.
  </p>

  <h3>The foundation of everything we do</h3>

  <p>
    That childhood experience became the foundation of 3M Property Group.
  </p>

  <p>
    Rent-to-rent in the social housing sector is not just a business model to me — it is a direct response to a problem I lived through.
  </p>

  <p>
    Every property we take on represents a family who will not have to sit at that kitchen table the way my mum did. Every clean, well-maintained home we provide is the kind of place that my younger self deserved to grow up in.
  </p>

  <p>
    This is not just what we do — <strong>it is why we exist.</strong>
  </p>
</section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Contact us</p>
          <h2>Start a housing partnership today.</h2>
          <p>Whether you are a council housing team or a landlord with a property available, send us your details and we will get back to you.</p>
          <p><Phone size={18}/> 020 0000 0000</p>
          <p><Mail size={18}/> hello@3mpropertygroup.co.uk</p>
          <p><MapPin size={18}/> London & surrounding boroughs</p>
        </div>
        <form>
          <input placeholder="Full name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <select><option>I am a council / local authority</option><option>I am a landlord</option><option>Other</option></select>
          <textarea placeholder="Message"></textarea>
          <button type="button">Submit enquiry</button>
        </form>
      </section>

      <footer>© 2026 3M Property Group. All rights reserved.</footer>
    </div>
  )
}

function Card({ icon, title, text }) {
  return <div className="card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>
}

createRoot(document.getElementById('root')).render(<App />)
