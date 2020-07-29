export interface Config {
  port: number;
  database: string;
}

export const config: Config = {
  port: 3000,
  database: "mongodb://tom:123456@3.22.240.21/galbd_db",
};
