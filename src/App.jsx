import { useState } from "react";
import { Title } from "./conponents/Title";
import { InputForm } from "./conponents/InputForm";
import { HabitList } from "./conponents/HabitList";

export const App = () => {
  const [habitForm, setHabitForm] = useState("");
  const [habitList, setHabitList] =
    useState([{
      id: 0,
      text: "瞑想",
      count: 0
    },
    {
      id: 1,
      text: "朝散歩",
      count: 0
    },
    {
      id: 2,
      text: "寝る前ヨガ",
      count: 0
    }]);

  const onClickHabitAdd = () => {
    setHabitList([...habitList, { id: habitList.length, text: habitForm, count: 0 }])
    setHabitForm("");
  }

  const onClickPlus = (reHabit) => {
    const arrForPlus = habitList.map((habit) => {
      if (habit.id === reHabit.id)
        return {
          ...habit, count: habit.count + 1
        }; else {
        return habit
      }
    })
    setHabitList(arrForPlus)
  }

  const onClickMinus = (reReHabit) => {
    const arrForMinus = habitList.map((habit) => {
      if (habit.id === reReHabit.id) {
        if (habit.count === 0) {
          return habit
        }
        return {
          ...habit, count: habit.count - 1
        }
      }
      return habit
    })
    setHabitList(arrForMinus)
  }




  return (
    <div className="bg-orage-100 rounded-lg h-auto w-auto shadow flex flex-col">
      <Title />
      <div className="h-190 bg-orange-100">
        <InputForm
          habitForm={habitForm}
          setHabitForm={setHabitForm}
          onClickAdd={onClickHabitAdd}
        />
        <HabitList
          habitList={habitList}
          onClickPlus={onClickPlus}
          onClickMinus={onClickMinus}
        />
      </div>

    </div>
  )
}
