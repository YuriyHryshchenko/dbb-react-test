import { Dropbox } from 'dropbox';

const dbx = new Dropbox({ accessToken: process.env.ACCESS_TOKEN });

export async function getFilesList(path: string) {
  const response = await dbx.filesListFolder({ path });
  return response.result.entries;
}
