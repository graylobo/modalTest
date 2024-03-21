import React, { useState } from "react";
import { useModalStack } from "../../hooks/useModalStack";

function TestModal2() {
  const [inputData, setInputData] = useState("");
  const { currentModal } = useModalStack();

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputData(e.target.value);
        }}
      />
      <button
        onClick={() => {
          currentModal.handleConfirm?.(inputData);
        }}
      >
        확인
      </button>
    </div>
  );
}

export default TestModal2;
