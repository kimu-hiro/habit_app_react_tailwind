export const MinusButton = (props) => {
    const { onClickMinus, habit } = props;
    return (
        <button className="flex justify-center items-center h-10 w-10 rounded-xl bg-orange-500 mx-2"
            onClick={() => onClickMinus(habit)}  >-</button>
    )
}