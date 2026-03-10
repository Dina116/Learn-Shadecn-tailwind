import { useState } from 'react';
import type { STATIONS } from '../../types';

export default function usePendingPosts() {
  const [selectedStation, setSelectedStation] = useState<STATIONS>(
    {} as STATIONS,
  );

  return {
    selectedStation,
    setSelectedStation,
  };
}
