interface ContactData {
  name: string;
  jobTitle?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  pictureUrl?: string;
}

interface Contact extends ContactData {
  id: string;
}
