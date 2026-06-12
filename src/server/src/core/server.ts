import mongoose from "mongoose";
import config from 'config';

interface DbConfig {
  host: string;
  username: string;
  password: string;
  dbName: string;
  optionalParams?: string;
}

export class Server {

  async dbConnect(silent: boolean = false): Promise<void> {
    const { username, password, host, dbName } = config.get<DbConfig>('dbConfig');
    const mongoUrl = new URL(`mongodb+srv://${host}/${dbName}`);
      mongoUrl.username = username;
      mongoUrl.password = password;

    try {
      await mongoose.connect(mongoUrl.toString(), {});
      if (!silent) {
        console.log('connected to db');
      }
    }
    catch (error) {
      console.log('cannot connect to db');
      mongoose.disconnect();
      setTimeout(this.dbConnect.bind(this), 5000);
    }
  }

}
