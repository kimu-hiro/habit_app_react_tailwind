import { MinusButton } from "./MinusButton";
import { PlusButton } from "./PlusButton";

export const HabitList = (props) => {
    const { habitList, onClickPlus, onClickMinus } = props;
    return (
        <div className="flex flex-col justify-center items-center p-4">
            {
                habitList.map((habit) => {
                    return (

                        <li
                            key={habit.id}
                            className="flex flex-col justify-center text-xl border
                            bg-white rounded-xl p-4 mb-4 w-192 mx-auto shadow-md
                             "
                        >
                            <p className="
                                 mt-3 border-b border-gray-400">
                                {habit.text}
                            </p>
                            <div className="flex items-center justify-center mt-5 mb-3">
                                <p className="text-2xl text-center text-red-500
                                 shadow rounded-xl w-12 p-2 mr-3">{habit.count}</p>
                                <PlusButton
                                    onClickPlus={onClickPlus}
                                    habit={habit}
                                />
                                <MinusButton
                                    onClickMinus={onClickMinus}
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