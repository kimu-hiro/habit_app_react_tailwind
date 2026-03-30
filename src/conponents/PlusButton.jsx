export const PlusButton = (props) => {
    const { onClickPlus, habit } = props;
    return (
        <button className="flex justify-center items-center h-10 w-10 rounded-xl bg-orange-500"
            onClick={() => { onClickPlus(habit) }}>+
        </button>
    )
}