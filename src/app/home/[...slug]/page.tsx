import { FilesList } from '@/components/files-list/FilesList';

type FolderPagePropsType = {
  params: {
    slug: string[];
  };
};
export default function FolderPage({ params: { slug } }: FolderPagePropsType) {
  const pathToFolder = `/${slug.join('/')}`;
  return (
    <div>
      <FilesList pathToFolder={pathToFolder} />
    </div>
  );
}
