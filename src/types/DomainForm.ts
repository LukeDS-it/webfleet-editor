import * as Yup from 'yup';

export class DomainForm {
  constructor(readonly title?: string, readonly id?: string, readonly icon?: string) {
  }

  static emptyForm(): DomainForm {
    return new DomainForm('', '', '')
  }

  static ValidationSchema = Yup.object().shape({
    title: Yup.string().required('Required'),
    id: Yup.string()
      .required('Required')
      .matches(/^[\w-_]*$/, 'Must contain only letters, numbers, hyphens, underscores'),
    icon: Yup.string().required('You must choose an icon')
  })
}