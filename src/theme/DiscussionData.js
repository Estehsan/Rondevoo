export default {
  id: '1',
  users: [
    {
      id: 'u1',
      name: 'Estehsan',
      imageUri: 'https://avatars.githubusercontent.com/u/7809332?v=4',
    },
    {
      id: 'u2',
      name: 'Elon Musk',
      imageUri:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
    },
  ],
  messages: [
    {
      id: 'm1',
      content: 'How are you, Elon!',
      createdAt: '2020-10-10T12:48:00.000Z',
      user: {
        id: 'u1',
        name: 'Estehsan',
      },
    },
    {
      id: 'm2',
      content: 'I am good, good',
      createdAt: '2020-10-03T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm3',
      content: 'What about you?',
      createdAt: '2020-10-03T14:49:40.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm4',
      content: 'Good as well, preparing for the stream now.',
      createdAt: '2020-10-03T14:50:00.000Z',
      user: {
        id: 'u1',
        name: 'Estehsan',
      },
    },
    {
      id: 'm5',
      content: 'How is SpaceX doing?',
      createdAt: '2020-10-03T14:51:00.000Z',
      user: {
        id: 'u1',
        name: 'Estehsan',
      },
    },
    {
      id: 'm6',
      content: 'going to the Moooooon',
      createdAt: '2020-10-03T14:49:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
    {
      id: 'm7',
      content: 'btw, SpaceX is interested in buying notJust.dev!',
      createdAt: '2020-10-03T14:53:00.000Z',
      user: {
        id: 'u2',
        name: 'Elon Musk',
      },
    },
  ],
};
