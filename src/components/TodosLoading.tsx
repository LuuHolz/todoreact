import Spinner from "../assets/Spinner.svg"

const TodosLoading = () => {
  return (
    <div className="spinnerContainer">
        <img src={Spinner} alt="spinner" className="spinnerLoading" />
    </div>
  )
}

export {TodosLoading}
