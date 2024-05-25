import { useDispatch } from 'react-redux';

import type { AppDispatch } from 'providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
