
const TodoList = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="todoListContainer">
      <ul className="todoListUl">
        {children}
      </ul>
    </div>
  );
};

export { TodoList };
