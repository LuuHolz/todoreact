
const TodoCounter = ({total, completed}: {total:number; completed:number}) => {
  console.log(total, completed)
  return (
    <div>
      {total || completed >= 1 ? (
        <h1 className="textCounter">
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1> 
      ) : <p className="textCounter">No hay tareas que completar</p>}


    </div>


  )
}

export {TodoCounter}
