
const TodoButton = ({setShowModal}) => {
  

  return (
    <div className="buttonContaier">
      <button onClick={() => setShowModal(state => !state)} className="buttonAdd">
        +
      </button>
    </div>
  );
};

export { TodoButton };
