import {AuthorModel} from './AuthorModel';

export interface MessageModel {
  id?: string;
  timestamp?: number;
  text: string;
  author: AuthorModel;
}
