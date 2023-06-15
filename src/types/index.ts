import { Document } from 'mongoose';

export interface NFT extends Document {
  name: string;
  value: number;
  info: string;
  image: string;
}
