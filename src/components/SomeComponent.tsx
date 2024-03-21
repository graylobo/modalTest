import React, { useState } from "react";
import { useModalStack } from "../hooks/useModalStack";
import TestModal1 from "./modal/TestModal1";

function SomeComponent() {
  const { openModal, closeModal } = useModalStack();
  const [receivedData, setReceivedData] = useState("");
  const handleOpenModal = () => {
    openModal({
      title: "출고지 설정1",
      element: <TestModal1 />,
      handleConfirm: (data) => {
        closeModal();
        setReceivedData((prev) => {
          // 일반 컴포넌트에서 Modal을 호출한 경우 내부 업데이트 로직이 정상적으로 실행됨
          console.log("TestModal1로부터 받은 데이터:", data);
          return data;
        });
      },
    });
  };

  return (
    <div>
      <div>{`수신값1:${receivedData}`}</div>
      <button onClick={handleOpenModal}>모달1열기</button>
    </div>
  );
}

export default SomeComponent;
