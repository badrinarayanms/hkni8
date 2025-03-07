import React from 'react'

function Footer() {
  return (
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
  )
}

export default Footer
