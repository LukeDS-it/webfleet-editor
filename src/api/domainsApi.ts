import {Domain} from 'types/Domain';
import {auth, firestore} from 'utils/firebase';
import firebase from 'firebase';

const domains = firestore.collection('domains');

export const findAll =
  () => domains
      .where('creator', '==', auth.currentUser.email)
      .get()
      .then((snapshot) => snapshot.docs.map(toDomain))



const toDomain = (documentData: firebase.firestore.QueryDocumentSnapshot) => {
  return new Domain(documentData.id, documentData.get('title'), documentData.get('icon'))
}