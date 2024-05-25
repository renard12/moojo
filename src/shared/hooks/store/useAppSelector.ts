import { useSelector } from 'react-redux';

import type { RootState } from 'providers/StoreProvider';
import type { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
