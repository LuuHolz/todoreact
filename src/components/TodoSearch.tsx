

const TodoSearch = ({searchValue, setSearchValue}: {searchValue:string; setSearchValue: React.Dispatch<React.SetStateAction<string>> }) => {

  return (
    <div className="todoSearchContainer">
      <input
        type="text"
        className="todoSearch"
        placeholder="Agrega una tarea pendiente"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export { TodoSearch };
