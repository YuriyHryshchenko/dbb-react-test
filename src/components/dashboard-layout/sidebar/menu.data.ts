import type { IMenu } from '@/components/dashboard-layout/sidebar/menu.interface';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DrawIcon from '@mui/icons-material/Draw';
import { ROUTES_CONFIG } from '@/config/page-url.config';

export const MENU: IMenu[] = [
  { icon: DescriptionIcon, link: ROUTES_CONFIG.HOME, name: 'All files' },
  { icon: PhotoCameraIcon, link: ROUTES_CONFIG.PHOTO, name: 'Photos' },
  { icon: DrawIcon, link: ROUTES_CONFIG.SIGNATURES, name: 'Signatures' },
];
