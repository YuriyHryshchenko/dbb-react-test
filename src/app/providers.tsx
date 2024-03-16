'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import darkTheme from '@/theme/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material';
import type { PropsWithChildren } from 'react';

export function Providers({ children }: PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProvider>
  );
}
