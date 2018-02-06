export interface DocumentModel {
  id: string;
}

export interface DocumentStore<T> {
  find(query: string): T[];

  findById(id: string): T;

  insert(document: T): T;

  update(document: T): T;

  remove(id: string): T;
}
