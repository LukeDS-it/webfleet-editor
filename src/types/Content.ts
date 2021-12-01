export class Content {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly type: ContentType,
    readonly path: string,
    readonly text?: string,
    readonly children?: Array<Content>
  ) {}
  withChildren(list: Array<Content>): Content {
    return new Content(this.id, this.title, this.type, this.path, this.text, list)
  }
}

export type ContentType = 'Folder' | 'Page'
