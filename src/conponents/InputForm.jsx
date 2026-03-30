export const InputForm = (props) => {
    const { habitForm, setHabitForm, onClickAdd } = props;
    return (
        <div className="flex justify-center items-center m-8">
            <input placeholder="新習慣"
                className="
                text-2xl h-10 w-90 m-3 bg-orange-300 
                rounded-lg text-white text-center"
                value={habitForm}
                onChange={(e) => setHabitForm(e.target.value)}>
            </input>
            <button onClick={() => onClickAdd()}
                className="h-10 w-25 tex-3xl bg-orange-500 text-white rounded-xl ">習慣を追加
            </button>
        </div >
    )
}