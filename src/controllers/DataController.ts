import { Response, Request } from 'express';
import { NFT } from '../types';
import BaseNFT from '../models/schema/BaseNFT';

const getData = async (_req: Request, res: Response): Promise<void> => {
  try {
    const nfts: NFT[] = await BaseNFT.find();
    res.status(200).json({ nfts });
  } catch (error) {
    throw error;
  }
};

export { getData };
