// All data is mocked
// TODO: connect to real api
import mockContacts from './mockContacts';

let contacts = mockContacts;

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

let nextId = new Date().getTime();
const createId = () => nextId++;

export const getContacts = () => wait(500).then(() => contacts);

export const getContact = async (id: string) => {
  await wait(200);
  return contacts.find(c => c.id === id);
};

export const deleteContact = async (id: string) => {
  await wait(200);
  contacts = contacts.filter(c => c.id !== id);
};

export const addContact = async (data: ContactData) => {
  await wait(200);
  const contact = {
    id: `c${createId()}`,
    ...data,
  };
  contacts.unshift(contact);
  return contact;
};

export const updateContact = async (id: string, data: ContactData) => {
  await wait(200);
  let contact: Contact | undefined = undefined;
  contacts = contacts.map(c => (c.id === id ? (contact = { id, ...data }) : c));
  if (!contact) {
    throw `No contact found with id '${id}'`;
  }
};
