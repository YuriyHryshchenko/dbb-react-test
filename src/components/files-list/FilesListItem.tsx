import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@mui/material';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import NextLink from 'next/link';

type FilesListItemProps = {
  fileName: string;
  tag: string;
  path?: string;
};
export function FilesListItem({ fileName, tag, path }: FilesListItemProps) {
  return (
    <Card sx={{ flex: '0 1 345px' }}>
      {tag === 'folder' ? (
        <CardActionArea component={NextLink} href={`/home/${path}`}>
          <Box p={2} sx={{ display: 'flex' }}>
            <FolderIcon sx={{ height: '100px', flex: '1 0 100%' }} />
          </Box>
          <CardContent>
            <Typography
              align={'center'}
              gutterBottom
              variant='h5'
              component='div'
            >
              {fileName}
            </Typography>
          </CardContent>
        </CardActionArea>
      ) : (
        <>
          <Box p={2} sx={{ display: 'flex' }}>
            <InsertDriveFileIcon sx={{ height: '100px', flex: '1 0 100%' }} />
          </Box>
          <CardContent>
            <Typography
              align={'center'}
              gutterBottom
              variant='h5'
              component='div'
            >
              {fileName}
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
}
