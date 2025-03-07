export async function POST(req) {
    // ...existing webhook verification code...
  
    const { id, email_addresses, first_name, last_name } = evt.data;
    const eventType = evt.type;
  
    console.log('Webhook received:', {
      eventType,
      userId: id,
      emailData: email_addresses,
      firstName: first_name,
      lastName: last_name
    });
  
    if (eventType === 'user.created') {
      try {
        // Extract email and name with null checks
        const email = email_addresses?.[0]?.email_address;
        const name = [first_name, last_name].filter(Boolean).join(' ');
  
        if (!email || !name) {
          console.error('Missing required user data:', { email, name });
          return new Response('Missing required user data', { status: 400 });
        }
  
        console.log('Attempting to store user data:', { id, email, name });
  
        // Store the user data with error handling
        const { data, error } = await supabase
          .from('users')
          .insert([{ 
            id, 
            created_at: new Date().toISOString(),
            email, 
            name
          }])
          .select();
  
        if (error) {
          console.error('Supabase error:', error);
          return new Response(JSON.stringify({ error: error.message }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }
  
        console.log('User data stored successfully:', data);
        return new Response(JSON.stringify({ success: true, data }), { 
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (err) {
        console.error('Unexpected error:', err);
        return new Response(JSON.stringify({ error: err.message }), { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }
  
    return new Response('Webhook processed', { status: 200 });
  }