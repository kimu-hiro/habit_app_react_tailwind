import { useState } from "react";
import { Title } from "./conponents/Title";
import { InputForm } from "./conponents/InputForm";
import { HabitList } from "./conponents/HabitList";
import { useEffect } from "react";

export const App = () => {
  const [habitForm, setHabitForm] = useState("");
  //ユーザー操作をデータとして管理してる
  const [habitList, setHabitList] =
    useState(() => {
      const data = localStorage.getItem("habitList");
      return data ? JSON.parse(data) : [];
    })


  useEffect(() => {
    localStorage.setItem("habitList",
      JSON.stringify(habitList)
    )
  }, [habitList]
  );
  //useEffectの第二引数である[habitList]が変更されて点火したら、この処理してねっていうuseEffectの処理を作ってるコード。 　
  //で、内容がhabitListの内容をJSON化、str型化lさせて、localStrageってメモ帳にsetItemって関数で保存している。





  const onClickHabitAdd = () => {
    if (habitForm.trim() === ("")) {
      setHabitForm("");
      return;
    }
    //ユーザー入力のバリデーション(入力がおかしくないかチェック)してる
    const textHabitList = habitList.map(
      habitList => habitList.text
    );
    if (textHabitList.includes(habitForm)) {
      setHabitForm("");
      return;
    }

    setHabitList([...habitList, { id: Date.now(), text: habitForm, count: 0 }])
    setHabitForm("");
  }

  const onClickPlus = (plusHabit) => {
    const arrForPlus = habitList.map((habit) => {
      if (habit.id === plusHabit.id)
        return {
          ...habit, count: habit.count + 1
        }; else {
        return habit
      }
    })
    setHabitList(arrForPlus)
  }

  const onClickMinus = (minusHabit) => {
    const arrForMinus = habitList.map((habit) => {
      if (habit.id === minusHabit.id) {
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

  const onClickUp = (index) => {
    //指定した要素と1つ前の要素を入れ替えて順番を上に移動させる関数
    //つまり
    ////指定indexとその前の要素をswapして表示順を変更する関数
    if (index === 0) return;
    const arrForUp = [...habitList];
    const temp = arrForUp[index - 1];

    arrForUp[index - 1] = arrForUp[index];
    arrForUp[index] = temp;
    setHabitList(arrForUp);
  }

  const onClickDown = (index) => {
    ////指定indexと次の要素をswapして順番を下に移動する関数。
    const arrForDown = [...habitList];
    const temp = arrForDown[index + 1];
    //swapのために一時保存。
    if (index === arrForDown.length - 1) return;
    arrForDown[index + 1] = arrForDown[index];
    arrForDown[index] = temp;
    setHabitList(arrForDown);
  };



  const onClickDelete = (deleteHabit) => {
    const arrForDelete = habitList.filter((
      habit) => {
      return habit.id !== deleteHabit.id
    })
    setHabitList(arrForDelete);
  }






  return (
    <div className="bg-orange-100 rounded-lg h-auto w-auto shadow flex flex-col">
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
          onClickDelete={onClickDelete}
          onClickUp={onClickUp}
          onClickDown={onClickDown}
        />

      </div>

    </div>
  )
}
