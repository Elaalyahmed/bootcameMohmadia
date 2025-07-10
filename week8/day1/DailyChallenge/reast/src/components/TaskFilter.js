import React, { useContext } from 'react';
import { TaskContext } from '../components/TaskContext';

const TaskFilter = () => {
  const { dispatch, state } = useContext(TaskContext);
  const { filter } = state;

  return (
    <div style={{ marginTop: '10px' }}>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ALL' })} disabled={filter === 'ALL'}>
        All
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'ACTIVE' })} disabled={filter === 'ACTIVE'}>
        Active
      </button>
      <button onClick={() => dispatch({ type: 'SET_FILTER', payload: 'COMPLETED' })} disabled={filter === 'COMPLETED'}>
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
