import { Account, Client, ID } from 'appwrite';
export class loginWithPhone {
  static loginWithPhoneNumber = (phoneNumber: string) => {
    const client = new Client()
      .setEndpoint('https://localhost/v1') // Your API Endpoint
      .setProject('63a9571736da19628eb2'); // Your project ID

    const account = new Account(client);
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe').then(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      },
    );
  };
}
