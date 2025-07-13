import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DataFetcher from './components/DataFetcher';
import dataReducer from './features/dataSlice';
import { ExampleData } from './types/types';
import './App.css'

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Generic Data Fetcher</h1>
        <DataFetcher<ExampleData[]>
          dataKey="todos"
          url="https://jsonplaceholder.typicode.com/todos"
        >
          {({ data, loading, error }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error}</p>;
            return (
              <ul>
                {data?.slice(0, 5).map(item => (
                  <li key={item.id}>
                    {item.title} - {item.completed ? '✓' : '✗'}
                  </li>
                ))}
              </ul>
            );
          }}
        </DataFetcher>
      </div>
    </Provider>
  );
};

export default App;