export const profissionalGetAllRouteSwaggerConfig = {
    description:
      'Route to get all profissional, returns some data about the situation.',
    tags: ['Profissional'],
    response: {
      200: {
        description: 'Successful response!',
        type: 'array',
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
          timestamp: { type: 'number', description: 'Request date' },
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



  export const profissionalCreateRouteSwaggerConfig = {
    description:
      'Route to create a profissional, returns some data about the situation.',
    tags: ['Profissional'],
    response: {
      201: {
        description: 'Successful response!',
        type: 'array',
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
          timestamp: { type: 'number', description: 'Request date' },
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