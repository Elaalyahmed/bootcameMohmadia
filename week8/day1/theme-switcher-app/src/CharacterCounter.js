import React, { useRef, useState } from "react";

function CharacterCounter() {
  const inputRef = useRef(null);         // مرجع لحقل الإدخال
  const [count, setCount] = useState(0); // الحالة لعرض عدد الحروف

  const handleInput = () => {
    const length = inputRef.current.value.length;
    setCount(length); // تحديث العداد
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Character Counter</h2>
      <input
        type="text"
        ref={inputRef}
        onInput={handleInput}
        placeholder="Type something..."
        style={{ padding: "10px", width: "300px", fontSize: "16px" }}
      />
      <p style={{ marginTop: "10px" }}>Characters: {count}</p>
    </div>
  );
}

export default CharacterCounter;
