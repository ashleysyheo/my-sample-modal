import Modal from './components/Modal';

export default function App() {
  return (
    <div>
      <Modal trigger={<button>열기</button>}>
        <h2>제목</h2>
        <p>내용</p>
      </Modal>
    </div>
  );
}
