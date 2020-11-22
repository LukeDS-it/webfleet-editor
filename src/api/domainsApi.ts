import {Domain} from 'types/Domain';
import {auth, firestore} from 'utils/firebase';
import firebase from 'firebase';
import {DomainForm} from 'types/DomainForm';

const domains = firestore.collection('domains');

export const findAll =
  () => domains
    .where('author', '==', auth.currentUser.email)
    .where('deleted', '==', false)
    .get()
    .then((snapshot) => snapshot.docs.map(toDomain));

export const createDomain =
  (domain: DomainForm) => domains
    .doc(domain.id)
    .set({
      title: domain.title,
      icon: domain.icon,
      author: auth.currentUser.email,
      deleted: false
    });

const toDomain = (documentData: firebase.firestore.QueryDocumentSnapshot) => {
  return new Domain(documentData.id, documentData.get('title'), documentData.get('icon'));
};