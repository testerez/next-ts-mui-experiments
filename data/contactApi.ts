// All data is mocked
// TODO: connect to real api

import faker from 'faker';

let mockContacts = [...Array(50)].map((_, i) => ({
  id: `c${i + 1}`,
  name: faker.name.findName(),
  jobTitle: faker.name.jobTitle(),
  address: faker.address.streetAddress(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  pictureUrl: faker.image.avatar(),
}));

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let nextId = new Date().getTime();
const createId = () => nextId++;

export const getContacts = () => wait(500).then(() => mockContacts);

export const getContact = async (id: string) => {
  await wait(200);
  return mockContacts.find(c => c.id === id);
};

export const deleteContact = async (id: string) => {
  await wait(200);
  mockContacts = mockContacts.filter(c => c.id !== id);
};

export const addContact = async (data: ContactData) => {
  await wait(200);
  const contact = {
    id: `c${createId()}`,
    ...data,
  };
  mockContacts.unshift(contact);
  return contact;
};

export const updateContact = async (id: string, data: ContactData) => {
  await wait(200);
  let contact: Contact | undefined = undefined;
  mockContacts = mockContacts.map(
    c => (c.id === id ? (contact = { id, ...data }) : c),
  );
  if (!contact) {
    throw `No contact found with id '${id}'`;
  }
};
