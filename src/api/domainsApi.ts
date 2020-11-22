import {Domain} from 'types/Domain';

export const findAll =
    () => new Promise<Array<Domain>>(resolve => resolve([new Domain('ldsoftware.it', 'LDSoftware', 'https://firebasestorage.googleapis.com/v0/b/webfleet-serverless.appspot.com/o/default-resources%2Ficons%2Ficons8-aircraft-100.png?alt=media')]))
