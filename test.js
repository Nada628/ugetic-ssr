import https from 'https';

https.get('https://ugeticapi.ugetic.com/api/socialMedia', (res) => {
  console.log('✅ statusCode:', res.statusCode);

  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log('✅ Body:', data));
}).on('error', (err) => {
  console.error('❌ Request failed:', err);
});
