export const DeleteButton = (props) => {
    const { onClickDelete, habit } = props;
    return (
        <button className="text-base bg-red-500 text-white rounded"
            onClick={() => {
                const isOk = window.confirm("本当に削除しますか？");
                if (isOk) {
                    onClickDelete(habit)
                }
            }}> 削除</button>
    )
}