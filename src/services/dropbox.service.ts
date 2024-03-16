import { Dropbox } from 'dropbox';

const dbx = new Dropbox({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN,
});

export async function getFilesList(path: string) {
  const response = await dbx.filesListFolder({ path });
  return response.result.entries;
}
