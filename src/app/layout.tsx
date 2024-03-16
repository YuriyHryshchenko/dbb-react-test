import type { Metadata } from 'next';
import './globals.css';
import { CssBaseline } from '@mui/material';
import { DashboardLayout } from '@/components/dashboard-layout/DashboardLayout';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'DBB REACT TEST',
  description: 'Explorer navigation project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <CssBaseline />
          <DashboardLayout>{children}</DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
