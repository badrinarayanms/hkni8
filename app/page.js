'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Wallet, Shield, Globe, Zap, ChevronRight, Github, Twitter, Linkedin } from "lucide-react"
import { SignedIn, SignedOut, useClerk, UserButton } from "@clerk/nextjs"


export default function LandingPage() {
  const { openSignIn } = useClerk();
  const handleSignIn = () => {
    openSignIn({
      redirectUrl: '/dashboard'
    });
  };
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: 'white' }}>
      {/* Header */}
      <header style={{ maxWidth: 'container', margin: '0 auto', padding: '1.5rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'linear-gradient(to bottom right, #9333ea, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Ezup</span>
        </div>
        
        <Button style={{ display: 'none', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(to right, #9333ea, #3b82f6)', ':hover': { background: 'linear-gradient(to right, #7e22ce, #2563eb)' }, '@media (min-width: 768px)': { display: 'flex' } }}>
          <Wallet style={{ width: '1rem', height: '1rem' }} />
          Connect Wallet
        </Button>
        <Button variant="ghost" size="icon" style={{ '@media (min-width: 768px)': { display: 'none' } }}>
         <UserButton/>
        </Button>
      </header>

      {/* Hero Section */}
      <section style={{marginTop:140, height: '100vh', maxWidth: 'container', margin: '0 auto', padding: '1rem', paddingTop: '5rem', paddingBottom: '5rem', '@media (min-width: 768px)': { paddingTop: '8rem', paddingBottom: '8rem' } }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(2, 1fr)' } }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="flex justify-center items-center">
            <h1 style={{ fontSize: '7rem', fontWeight: 'bold', lineHeight: '1.25', '@media (min-width: 768px)': { fontSize: '3rem' }, '@media (min-width: 1024px)': { fontSize: '3.75rem' } }}>
            <span style={{ backgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #a78bfa, #3b82f6)' }}>
                Ezup{" "}
              </span>
              Your{" "}
               
              StartUp
            </h1>
            <p style={{ marginTop:20, fontSize: '2rem', color: '#9ca3af', maxWidth: '90rem' }} className="text-center">
            Empower your small business with Easy Startup—an all-in-one platform designed to simplify operations, enhance efficiency, and drive growth.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', '@media (min-width: 640px)': { flexDirection: 'row' } }}>
              {/* <Button style={{ background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', ':hover': { background: 'linear-gradient(to right, #7e22ce, #2563eb)' } }}>
                Get Started
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
              </Button>
              <Button variant="outline" style={{ borderColor: '#0F172A', backgroundColor: '#0F172A80', ':hover': { backgroundColor: '#0F172A' }, color: 'white' }}>
                Learn More
              </Button> */}
              <SignedOut>
        {/* Show this when user is signed out */}
        <div className="space-y-4">
          <p className="text-gray-600">Sign in to access your business dashboard</p>
          
          <Button onClick={handleSignIn} style={{ background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', ':hover': { background: 'linear-gradient(to right, #7e22ce, #2563eb)' } }}>
                Get Started
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
              </Button>
        </div>
      </SignedOut>
  <SignedIn>
  <a href="/dashboard" className="flex justify-center items-center py-4 px-20 " style={{ marginTop:20, background: 'linear-gradient(to right, #9333ea, #3b82f6)', color: 'white', ':hover': { background: 'linear-gradient(to right, #7e22ce, #2563eb)' },borderRadius:10 ,paddingLeft:8,paddingRight:8}}>
                Get Started
                <ArrowRight style={{ marginLeft: '0.5rem', width: '1rem', height: '1rem' }} />
              </a>
  </SignedIn>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ maxWidth: 'container', margin: '0 auto', padding: '1rem', paddingTop: '5rem', paddingBottom: '5rem' }} >
        <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto', marginBottom: '4rem' }}>
          <Badge style={{ backgroundColor: '#0F172A', color: '#a78bfa', ':hover': { backgroundColor: '#0F172Acc' }, marginBottom: '1rem' }}>Features</Badge>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', '@media (min-width: 768px)': { fontSize: '2.25rem' } }}>Why Choose Easy Startup?
          </h2>
          <p style={{ color: '#9ca3af' }}>
          Our platform combines essential business tools into one seamless experience, helping you save time, reduce costs, and make smarter decisions.
          </p>
        </div>

       <div className="flex"> <div className="flex w-full" style={{ display: 'flex', gridTemplateColumns: '1fr', gap: '2rem', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' } }}>
          <div style={{ backgroundColor: '#0F172A', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937', ':hover': { borderColor: '#9333ea' }, transition: 'border-color 0.2s' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom right, #9333ea33, #3b82f633)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', ':hover': { background: 'linear-gradient(to bottom right, #9333ea4d, #3b82f64d)' }, transition: 'background 0.2s' }}>
              <Shield style={{ width: '1.5rem', height: '1.5rem', color: '#a78bfa' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>All-in-One Solution

</h3>
            <p style={{ color: '#9ca3af' }}>
            From marketing to financial tracking, manage everything in one place.
            </p>
          </div>

          <div style={{ backgroundColor: '#0F172A', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937', ':hover': { borderColor: '#9333ea' }, transition: 'border-color 0.2s' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom right, #9333ea33, #3b82f633)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', ':hover': { background: 'linear-gradient(to bottom right, #9333ea4d, #3b82f64d)' }, transition: 'background 0.2s' }}>
              <Zap style={{ width: '1.5rem', height: '1.5rem', color: '#a78bfa' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Competitor Insights
            </h3>
            <p style={{ color: '#9ca3af' }}>
            Leverage web scraping and social media analysis to stay ahead of the competition.

            </p>
          </div>

          <div style={{ backgroundColor: '#0F172A', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937', ':hover': { borderColor: '#9333ea' }, transition: 'border-color 0.2s' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '0.5rem', background: 'linear-gradient(to bottom right, #9333ea33, #3b82f633)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', ':hover': { background: 'linear-gradient(to bottom right, #9333ea4d, #3b82f64d)' }, transition: 'background 0.2s' }}>
              <Globe style={{ width: '1.5rem', height: '1.5rem', color: '#a78bfa' }} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Talent Acquisition
            </h3>
            <p style={{ color: '#9ca3af' }}>
              Identify and engage top talent from rival companies effortlessly.

            </p>
          </div>
        </div></div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#0F172A' }}>
        <div style={{ maxWidth: 'container', margin: '0 auto', padding: '1rem', paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '42rem', margin: '0 auto', marginBottom: '4rem' }}>
            <Badge style={{ backgroundColor: '#020617', color: '#a78bfa', ':hover': { backgroundColor: '#020617cc' }, marginBottom: '1rem' }}>How It Works</Badge>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem', '@media (min-width: 768px)': { fontSize: '2.25rem' } }}>
Simple, Efficient, and Powerful
</h2>
            <p style={{ color: '#9ca3af' }}>
            Getting started with Easy Startup is easy. Follow these steps to transform your business operations:

            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' } }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-0.125rem', background: 'linear-gradient(to right, #9333ea4d, #3b82f64d)', borderRadius: '0.5rem', filter: 'blur(4px)', opacity: '0.75' }}></div>
              <div style={{ position: 'relative', backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#9333ea33', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontWeight: 'bold' }}>
                    1
                  </div>
                  <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563', '@media (min-width: 768px)': { display: 'none' } }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}> Sign Up</h3>
                <p style={{ color: '#9ca3af' }}>
                 
Create your account and set up your business profile in minutes.


                </p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-0.125rem', background: 'linear-gradient(to right, #9333ea4d, #3b82f64d)', borderRadius: '0.5rem', filter: 'blur(4px)', opacity: '0.75' }}></div>
              <div style={{ position: 'relative', backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#9333ea33', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontWeight: 'bold' }}>
                    2
                  </div>
                  <ChevronRight style={{ width: '1.25rem', height: '1.25rem', color: '#4b5563', '@media (min-width: 768px)': { display: 'none' } }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Explore Tools

</h3>
                <p style={{ color: '#9ca3af' }}>
                Access our suite of tools, from email automation to expense tracking.
                </p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-0.125rem', background: 'linear-gradient(to right, #9333ea4d, #3b82f64d)', borderRadius: '0.5rem', filter: 'blur(4px)', opacity: '0.75' }}></div>
              <div style={{ position: 'relative', backgroundColor: '#020617', padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid #1f2937' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', backgroundColor: '#9333ea33', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a78bfa', fontWeight: 'bold' }}>
                    3
                  </div>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Grow Your Business
                </h3>
                <p style={{ color: '#9ca3af' }}>
                Use data-driven insights to optimize your strategy and outpace competitors.

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer style={{ backgroundColor: '#0F172A', borderTop: '1px solid #1F2937' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(4, 1fr)' } }}>
      {/* Logo and Social Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', background: 'linear-gradient(to bottom right, #9333ea, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Zap style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Ezup</span>
        </div>
        <p style={{ color: '#9CA3AF' }}>The Future of Business Management
Empower your small business with Easy Startup—an all-in-one platform designed to simplify operations, enhance efficiency, and drive growth.

</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="ghost" size="icon" style={{ color: '#9CA3AF', ':hover': { color: 'white' } }}>
            <Twitter style={{ width: '1.25rem', height: '1.25rem' }} />
          </Button>
          <Button variant="ghost" size="icon" style={{ color: '#9CA3AF', ':hover': { color: 'white' } }}>
            <Github style={{ width: '1.25rem', height: '1.25rem' }} />
          </Button>
          <Button variant="ghost" size="icon" style={{ color: '#9CA3AF', ':hover': { color: 'white' } }}>
            <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
          </Button>
        </div>
      </div>

      

      
     
    </div>

   
  </div>
</footer>

      {/* CTA Section */}
      
    </div>
  )
}

;
