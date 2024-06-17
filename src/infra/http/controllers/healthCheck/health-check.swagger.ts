export const healthCheckRouteSwaggerConfig = {
    description:
      'Route to application health, returns some data about the situation.',
    tags: ['Health Check'],
    response: {
      200: {
        description: 'Successful response!',
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Application status message',
          },
          uptime: {
            type: 'number',
            description: 'Time the application has been up',
          },
          responseTime: {
            type: 'number',
            description: 'Response delay time',
          },
          timestamp: { type: 'string', description: 'Request date' },
        },
      },
      500: {
        description: 'Application error!',
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Application error message',
          },
          uptime: {
            type: 'number',
            description: 'Time the application has been up',
          },
          responseTime: {
            type: 'number',
            description: 'Response delay time',
          },
          timestamp: { type: 'number', description: 'Request date' },
        },
      },
    },
  }