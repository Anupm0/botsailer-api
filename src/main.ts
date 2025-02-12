const fastify = require('fastify')({ logger: true });
const cors = require('@fastify/cors');

// Enable CORS for all routes
fastify.register(cors, {
  origin: '*', // Allow all origins (you can restrict this as needed)
  methods: ['GET'], // Only allow GET requests
});

// Define the GET route
fastify.get('/', async (_, reply) => {
  try {
    reply.status(200).send(
      `Welcome2 to consumet api! 🎉 \n${process.env.NODE_ENV === 'DEMO' ? 'This is a demo of the api. You should only use this for testing purposes.' : ''}`
    );
  } catch (error) {
    reply.status(500).send('Internal Server Error');
  }
});

// Start the server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server running on http://localhost:3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
