import {DocumentModel, DocumentStore} from './models/models';

/**
 * Documentation for Store class
 */
export class Store implements DocumentStore<DocumentModel> {
  /*
   @member Store#url
   @public
   @type {string}
  */
  private url: string;

  /*
   @constructor Store#constructor
   @public
  */
  constructor(url: string) { // init DB connection here
    this.url = url;
    console.log('Connect to db with given url:', url);
  }

  /*
   @method Store#find
   @public
  */
  public find(query: string): DocumentModel[] {
    console.log('Query to DB:', query);

    return [];
  }

  /*
   @method Store#findById
   @public
  */
  public findById(id: string) {
    console.log('findById:', id);

    return {id};
  }

  /*
   @method Store#insert
   @public
  */
  public insert(document: DocumentModel) {
    return document;
  }

  /*
   @method Store#update
   @public
  */
  public update(document: DocumentModel) {
    return document;
  }

  /*
   @method Store#remove
   @public
  */
  public remove(id: string) {
    return {id};
  }

  /*
   @method Store#test
   @public
  */
  public test() {
    return this.url;
  }
}
