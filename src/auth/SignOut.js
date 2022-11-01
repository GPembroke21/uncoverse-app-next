import { Auth } from 'aws-amplify';
import { favoriteEventsArray, favoriteEvents } from '../static/StaticVariables';

export async function signOut() {
    try {
        const sgnOut = await Auth.signOut();
        console.log("Signed out:", sgnOut)
        favoriteEventsArray.splice(0, favoriteEventsArray.length)
        for (var item in favoriteEvents) delete favoriteEvents[item]
    } catch (error) {
        console.log('error signing out: ', error)
    }
}