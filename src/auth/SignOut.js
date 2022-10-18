import { Auth } from 'aws-amplify';

export async function signOut() {
    try {
        const sgnOt = await Auth.signOut();
        console.log("Signed out:", sgnOt)
    } catch (error) {
        console.log('error signing out: ', error);
    }
}