import {firestore} from 'utils/firebase';
import firebase from 'firebase';
import {Content} from 'types/Content';

const contentsFor = (domain: string) => firestore.collection(`domains/${domain}/contents`);

export const getChildren = (domain: string, parent: string = 'index') =>
  contentsFor(domain)
    .where('parent', '==', parent)
    .get()
    .then((snapshot) =>
      snapshot.docs.map(toContentReduced).sort(alphabeticallyFoldersFirst)
    );

export const getContent = (domain: string, path: string = '/') => {
  const fullPath = (path.startsWith('/') ? path : `/${path}`).replace('~', '/')

  return contentsFor(domain)
    .where('path', '==', fullPath)
    .get()
    .then((snapshot) => snapshot.docs.map(toContent)[0])
    .then((content) => {
      if (content.type === 'Folder') {
        return getChildren(domain, content.id)
          .then((list) => content.withChildren(list));
      } else {
        return content;
      }
    });
}

const toContentReduced = (documentData: firebase.firestore.QueryDocumentSnapshot) => {
  return new Content(documentData.id, documentData.get('title'), documentData.get('type'), documentData.get('path'));
};

const toContent = (documentData: firebase.firestore.QueryDocumentSnapshot) => {
  return new Content(documentData.id, documentData.get('title'), documentData.get('type'), documentData.get('path'), documentData.get('text'));
};

const alphabeticallyFoldersFirst = (c1: Content, c2: Content) => {
  if (c1.type === 'Folder' && c2.type === 'Page') return -1;
  if (c1.type === 'Page' && c2.type === 'Folder') return 1;
  return c1.title.localeCompare(c2.title);
};
