import EncryptedStorage from 'react-native-encrypted-storage';

const saveCredentials = async (email: string, password: string, image: string, name: string) => {
  try {
    const response = await Promise.all([
      EncryptedStorage.setItem('email', email),
      EncryptedStorage.setItem('password', password),
      EncryptedStorage.setItem('image', image),
      EncryptedStorage.setItem('fullname', name),
    ]);

    return response;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export default saveCredentials;
