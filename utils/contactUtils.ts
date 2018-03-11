const avatarUrl = require('./avatar.jpg');

export const getPictureUrl = (contact: Contact) =>
  contact.pictureUrl || avatarUrl;
