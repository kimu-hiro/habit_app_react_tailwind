import { DeleteButton } from "./DeleteButton";
import { MinusButton } from "./MinusButton";
import { PlusButton } from "./PlusButton";

export const HabitList = (props) => {
    const { habitList, onClickPlus, onClickMinus, onClickDelete, onClickUp, onClickDown } = props;


    return (
        <div className="flex flex-col justify-center items-center p-4">
            {
                habitList.map((habit, index) => {
                    return (

                        <li
                            key={habit.id}
                            className="flex flex-col justify-center text-xl border
                            bg-white rounded-xl p-4 mb-4 w-192 mx-auto shadow-md
                             "
                        >

                            <p className="
                                 ml-3 mt-3 border-b border-gray-400
                                font-semibold">
                                {habit.text}
                            </p>


                            <div className="flex justify-start ml-3 gap-2">
                                <button onClick={() => { onClickUp(index) }} className="shadow rounded-xl">↑</button>
                                <button onClick={() => { onClickDown(index) }} className="shadow rounded-xl">↓</button>
                            </div>

                            <div className="flex items-end justify-end mt-5 mb-3">

                                <p className="flex items-end justify-end font-bold
                                        text-3xl text-center text-red-500
                                        shadow rounded-xl w-12 p-2 mr-3">
                                    {habit.count}
                                </p>
                                <PlusButton
                                    onClickPlus={onClickPlus}
                                    habit={habit}
                                />
                                <MinusButton
                                    onClickMinus={onClickMinus}
                                    habit={habit}
                                />
                                <DeleteButton
                                    onClickDelete={onClickDelete}
                                    habit={habit}
                                />

                            </div>
                        </li>

                    );
                })
            }
        </div>

    )
}