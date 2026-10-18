// hooks/useRequestWatch.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { requestWatch } from '@/services/service';

export function useRequestWatch() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (movieId: string) => requestWatch(movieId),

    onSuccess: (_, id) => {
      // Optionally invalidate/refetch related data
      queryClient.invalidateQueries({ queryKey: ['movie', id] });
      queryClient.invalidateQueries({ queryKey: ['watch-requests'] });
    },

    onError: (error) => {
      console.error('Watch request failed:', error);
    },
  });
}