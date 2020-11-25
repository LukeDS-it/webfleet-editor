export class DomainForm {
  constructor(readonly title?: string, readonly id?: string, readonly icon?: string) {
  }

  static emptyForm(): DomainForm {
    return new DomainForm('', '', '')
  }
}