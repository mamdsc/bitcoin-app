import { ETypeExtract } from '../enums/ETypeExtract';

export type TypeExtract = 'investment' | 'liquidation' | 'deposit';

export interface IExtractResponse {
  type: TypeExtract;
  value: number;
  createdAt: string;
  id: string;
}

export interface IExtract {
  type: ETypeExtract;
  value: string;
  createdAt: string;
  id: string;
}
