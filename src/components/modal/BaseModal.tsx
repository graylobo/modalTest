import styled from "styled-components";
import { useModalStack } from "../../hooks/useModalStack";

function BaseModal() {
  const { closeModal, currentModal } = useModalStack();

  if (!currentModal || !currentModal.isOpen) return null;

  function handleClose() {
    closeModal();
  }

  return (
    <Wrapper>
      <DefaultLayout className="custom-scroll">
        {currentModal.title && (
          <TopSection>
            {currentModal.title && <Title>{currentModal.title}</Title>}
            <button onClick={handleClose}>닫기</button>
          </TopSection>
        )}

        <ComponentSection>{currentModal.element}</ComponentSection>
      </DefaultLayout>
    </Wrapper>
  );
}

export default BaseModal;
const ComponentSection = styled.div`
  padding: 30px 20px 40px;
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: center;
  padding: 10px 20px;
  border-bottom: 1px solid #d8d8d8;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`;

const Title = styled.h3``;

const DefaultLayout = styled.div`
  background-color: white;
  position: relative;
  max-width: 80%;
  min-width: 500px;
  max-height: 100%;
  overflow: auto;
`;
const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
