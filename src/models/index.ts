import mongoose from 'mongoose';

export default () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@icebergassess.rbjxgi4.mongodb.net/${process.env.DB_NAME}`
    )
    .then(() => {
      return console.info(`Successfully connected.`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      return process.exit(1);
    });
};
