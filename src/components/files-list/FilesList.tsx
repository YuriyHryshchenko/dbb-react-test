'use client';
import { useState } from 'react';
import { getFilesList } from '@/services/dropbox.service';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { PageBreadcrumbs } from '@/components/page-breadcrumbs/PageBreadcrumbs';
import { FilesListItem } from '@/components/files-list/FilesListItem';
import { Alert, Box } from '@mui/material';
import { Loader } from '@/components/loader/Loader';

type FilesListPropsType = {
  pathToFolder: string;
};

export function FilesList({ pathToFolder }: FilesListPropsType) {
  const router = useRouter();
  const [path, setPath] = useState(pathToFolder);

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['files', path],
    queryFn: () => getFilesList(path),
  });

  const handleFolderClick = (folderPath: string | undefined) => {
    if (!folderPath) return;

    router.push(`/home/${folderPath}`);
    setPath(folderPath);
  };

  return (
    <div>
      <PageBreadcrumbs pathToFolder={pathToFolder} />
      {isLoading && <Loader />}
      <Box
        marginTop={6}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: {
            xs: 'center',
            md: 'flex-start',
          },
          alignItems: {
            xs: 'center',
            md: 'flex-start',
          },
        }}
      >
        {isError && <Alert severity={'error'}>Error occurred, try later</Alert>}
        {isSuccess &&
          data?.map((file) => (
            <FilesListItem
              key={file.name}
              fileName={file.name}
              tag={file['.tag']}
              onFolderClick={handleFolderClick}
              path={file.path_display}
            />
          ))}
      </Box>
    </div>
  );
}
