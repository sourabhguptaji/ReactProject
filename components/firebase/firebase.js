import firebase from 'firebase';
import { config } from './config';

firebase.initializeApp(config);
export const auth = firebase.auth();
export const db = firebase.database();
 