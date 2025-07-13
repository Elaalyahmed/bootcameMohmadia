import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../api/api';
import { fetchStart, fetchSuccess, fetchError } from '../features/dataSlice';
import { ApiState } from '../types/types';
import { createSelector } from '@reduxjs/toolkit';

interface DataFetcherProps<T> {
  dataKey: string;
  url: string;
  children: (props: {
    data: T | null;
    loading: boolean;
    error: string | null;
  }) => React.ReactNode;
}

// Memoized selector
const selectDataState = createSelector(
  (state: { data: any }, dataKey: string) => state.data[dataKey],
  (dataState) => dataState || { data: null, loading: false, error: null }
);

const DataFetcher = <T,>({ dataKey, url, children }: DataFetcherProps<T>) => {
  const dispatch = useDispatch();
  
  // Use the memoized selector
  const state = useSelector((state: { data: any }) => 
    selectDataState(state, dataKey)
  );

  useEffect(() => {
    let isMounted = true;
    
    const loadData = async () => {
      dispatch(fetchStart({ key: dataKey }));
      try {
        const data = await fetchData<T>(url);
        if (isMounted) {
          dispatch(fetchSuccess({ key: dataKey, data }));
        }
      } catch (error) {
        if (isMounted) {
          const errorMessage = error instanceof Error ? error.message : 'Unknown error';
          dispatch(fetchError({ key: dataKey, error: errorMessage }));
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [dataKey, url, dispatch]);

  return <>{children(state)}</>;
};

export default DataFetcher;