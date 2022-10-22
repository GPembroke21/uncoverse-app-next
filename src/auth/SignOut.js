import { Auth } from 'aws-amplify';

export async function signOut() {
    try {
        const sgnOut = await Auth.signOut();
        console.log("Signed out:", sgnOut)
    } catch (error) {
        console.log('error signing out: ', error);
    }
}