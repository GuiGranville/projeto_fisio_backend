export const pacienteGetAllRouteSwaggerConfig = {
    description:
      'Route to get all paciente, returns some data about the situation.',
    tags: ['Paciente'],
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



export const pacienteCreateRouteSwaggerConfig = {
    description:
      'Route to register a paciente.',
    tags: ['Paciente'],
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

  export const pacienteDeleteRouteSwaggerConfig = {
    description:
      'Route to delete a paciente',
    tags: ['Paciente'],
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