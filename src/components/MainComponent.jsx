import Die from "./MainComponents/Die.jsx";
import React from "react";
import { nanoid } from "nanoid";
export default function MainComponent() {
  function allNewDie() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);
      const isHeld = false;
      arr.push({ value: rand, isHeld: isHeld, id: nanoid() });
    }
    return arr;
  }

  function hold(id) {
    setNum((prev) => {
      return prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }


  function roll() {
    setNum((prev) => {
      return prev.map((die) => {
        return die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) };
      });
    });
  }

  const [num, setNum] = React.useState(allNewDie());

  const dices = num.map(function (dice) {
    return <Die isHeld={dice.isHeld} val={dice.value} key={dice.id} hold={() => {
      hold(dice.id);
    }}/>;
  });

  return (
    <main>
      <section className="mainSection">{dices}</section>
      <button className="rollButton" onClick={roll}>
        Roll
      </button>
    </main>
  );
}
