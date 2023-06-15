import { Response, Request } from 'express';
import UserNFT from '../models/schema/UserNFT';
import { getWeight, getValidatedWords } from '../utils';
import { NFT } from '../types';

const getUserData = async (_req: Request, res: Response): Promise<void> => {
  try {
    const nfts: NFT[] = await UserNFT.find();
    res.status(200).json({ nfts });
  } catch (error) {
    throw error;
  }
};

interface IAddWordRequest {
  nft: NFT;
  word: string;
}

const addWord = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nft, word }: IAddWordRequest = req.body;

    var current = await UserNFT.findOne({ name: nft.name });
    if (!current) {
      current = new UserNFT({ ...nft, info: '' });
      await current.save();
    }

    const newTags = getValidatedWords(current.info + ' ' + word);

    current.value = getWeight(nft.value, newTags.length);
    current.info = newTags.join(' ');

    await current.save();

    const nfts: NFT[] = await UserNFT.find();
    res.status(200).json({ nfts });
  } catch (error) {
    throw error;
  }
};

interface IRemoveWordRequest {
  nft: NFT;
  index: number;
}

const removeWord = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('removing info...');
    const { nft, index }: IRemoveWordRequest = req.body;

    const current = await UserNFT.findOne({
      name: nft.name,
    });

    if (current) {
      var words = getValidatedWords(current.info);
      words.splice(index, 1);

      if (words.length) {
        current.info = words.join(' ');
        current.value = getWeight(nft.value, words.length);
        await current.save();
      } else current.deleteOne();
    }

    const nfts: NFT[] = await UserNFT.find();
    console.log('return nfts:', nfts);
    res.status(200).json({ nfts });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { getUserData, addWord, removeWord };
