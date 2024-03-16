import { FilesList } from '@/components/files-list/FilesList';

export default function HomePage() {
  return (
    <div>
      <FilesList pathToFolder={''} />
    </div>
  );
}
