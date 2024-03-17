import { Breadcrumbs, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
import { ROUTES_CONFIG } from '@/config/page-url.config';

type PageBreadcrumbsPropsType = {
  pathToFolder: string;
};
export function PageBreadcrumbs({ pathToFolder }: PageBreadcrumbsPropsType) {
  const pathNames = pathToFolder.split('/').filter((x) => x);
  return (
    <Breadcrumbs maxItems={3} aria-label='breadcrumb'>
      <Link
        href={ROUTES_CONFIG.HOME}
        color={'inherit'}
        underline={'hover'}
        component={NextLink}
      >
        Home
      </Link>
      {pathNames.map((name, index) => {
        const last = index === pathNames.length - 1;
        const to = `/home/${pathNames.slice(0, index + 1).join('/')}`;
        return last ? (
          <Typography color='text.primary' key={to}>
            {name}
          </Typography>
        ) : (
          <Link
            component={NextLink}
            underline='hover'
            color='inherit'
            href={to}
            key={to}
          >
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
