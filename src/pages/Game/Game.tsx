import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./Game.module.css";
interface data {
  word: string;
}
const Game = (prop: data) => {
  const { word } = prop;
  const arr = word.trim().toUpperCase().split("");
  const [filledArr, setFilledArr] = useState<string[]>([]);
  const [victory, setVictory] = useState(false);
  const [lost, setLost] = useState(false);
  const [wrongLetters] = useState<string[]>([]);

  useEffect(() => {
    const tempArr: string[] = [];
    arr.map((e: string) => {
      if (e == " ") tempArr.push(" ");
      else tempArr.push("");
    });
    setFilledArr(tempArr);
  }, []);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");
  const [seventh, setSeventh] = useState("");
  const [eigth, setEigth] = useState("");
  const [ninth, setNinth] = useState("");
  useEffect(() => {
    if (JSON.stringify(arr) === JSON.stringify(filledArr)) {
      setVictory(true);
    }
    if (ninth) {
      setLost(true);
    }
  }, [arr, filledArr, ninth]);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const letter = e.currentTarget.innerText;

    let indices = [];
    if (arr.includes(letter)) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == letter) {
          indices.push(i);
        }
      }
      for (let i = 0; i < indices.length; i++) {
        filledArr[indices[i]] = arr[indices[i]];
      }
      indices = [];
      const newArr = [...filledArr];
      setFilledArr(newArr);
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        if (!first) setFirst(letter);
        if (first && !second) setSecond(letter);
        if (second && !third) setThird(letter);
        if (third && !fourth) setFourth(letter);
        if (fourth && !fifth) setFifth(letter);
        if (fifth && !sixth) setSixth(letter);
        if (sixth && !seventh) setSeventh(letter);
        if (seventh && !eigth) setEigth(letter);
        if (eigth && !ninth) {
          setNinth(letter);
        }
      }
    }
  };
  return (
    <>
      {word == "" ? (
        <div className={Styles.noGame}>
          No game here
          <Link to="/">
            <button>Return to Home</button>
          </Link>
        </div>
      ) : (
        <>
          <div className={Styles.parent}>
            <div className={Styles.screen}>
              <div className={Styles.sbox}>{first}</div>
              <div className={Styles.sbox}>{second}</div>
              <div className={Styles.sbox}>{third}</div>
              <div className={Styles.sbox}>{fourth}</div>
              <div className={Styles.sbox}>{fifth}</div>
              <div className={Styles.sbox}>{sixth}</div>
              <div className={Styles.sbox}>{seventh}</div>
              <div className={Styles.sbox}>{eigth}</div>
              <div className={Styles.sbox}>{ninth}</div>
            </div>
            <div className={Styles.gameBox}>
              {filledArr.map((letter) => {
                if (letter == " ")
                  return <div className={Styles.emptyBox}></div>;
                return <div className={Styles.correctLetter}>{letter}</div>;
              })}
            </div>
          </div>
          <div className={Styles.keyboardContainer}>
            <div className={Styles.keyboard}>
              <div className={Styles.firstRow}>
                <div className={Styles.key} onClick={handleClick}>
                  Q
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  W
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  E
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  R
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  T
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  Y
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  U
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  I
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  O
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  P
                </div>
              </div>
              <div className={Styles.secondRow}>
                <div className={Styles.key} onClick={handleClick}>
                  A
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  S
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  D
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  F
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  G
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  H
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  J
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  K
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  L
                </div>
              </div>
              <div className={Styles.thirdRow}>
                <div className={Styles.key}>ENTER</div>
                <div className={Styles.key} onClick={handleClick}>
                  Z
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  X
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  C
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  V
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  B
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  N
                </div>
                <div className={Styles.key} onClick={handleClick}>
                  M
                </div>
                <div className={Styles.key}>BKS</div>
              </div>
            </div>
          </div>
          {victory ? <div>You Won</div> : <></>}
          {lost ? <div>You Lost the word is {word}</div> : <></>}
        </>
      )}
    </>
  );
};
export default Game;
