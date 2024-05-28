
const TodoCounter = ({total, completed}: {total:number; completed:number}) => {
  return (

    <h1 className="textCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>

  )
}

export {TodoCounter}
