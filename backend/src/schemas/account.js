const email_regex = '/(.+)@(.+){2,}\.(.+){2,}/'

module.exports = {
  account: {
    type: 'object',
    properties: {
      id: { type: 'string' },
      username: { type: 'string' },
      email: { 
        type: 'string', 
        pattern: email_regex,
      },
      password: { type: 'string' },
    },
    additionalProperties: false,
  },
};
