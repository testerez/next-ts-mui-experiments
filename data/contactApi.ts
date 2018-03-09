// All data is mocked
// TODO: connect to real api

import faker from 'faker';


const mockContacts = [...Array(20)].map((_, i) => ({
  id: `c${i + 1}`,
  name: faker.name.findName(),
  jobTitle: faker.name.jobTitle(),
  address: faker.address.streetAddress(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  pictureUrl: faker.image.avatar(),
}));

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getContacts = () => wait(500)
  .then(() => mockContacts);
  
export const getContact = (id: string) => wait(500)
  .then(() => mockContacts.find(c => c.id === id));
