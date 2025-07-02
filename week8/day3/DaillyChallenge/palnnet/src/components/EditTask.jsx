import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../features/tasks/tasksSlice';

const EditTask = ({ task, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(editTask({ date, taskId: task.id, newText: editedText }));
    setIsEditing(false);
  };

  return (
    <div className="edit-task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
    </div>
  );
};

export default EditTask;