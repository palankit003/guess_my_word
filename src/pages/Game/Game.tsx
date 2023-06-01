import Styles from "./Game.module.css";
interface data {
  word: string;
}
const Game = (props: data) => {
  return (
    <>
      <div className={Styles.parent}>
        <div className={Styles.screen}>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
          <div className={Styles.sbox}></div>
        </div>
        <div className={Styles.gameBox}>Box</div>
      </div>
      <div className={Styles.keyboardContainer}>
        <div className={Styles.keyboard}>
          <div className={Styles.firstRow}>
            <div className={Styles.key}>Q</div>
            <div className={Styles.key}>W</div>
            <div className={Styles.key}>E</div>
            <div className={Styles.key}>R</div>
            <div className={Styles.key}>T</div>
            <div className={Styles.key}>Y</div>
            <div className={Styles.key}>U</div>
            <div className={Styles.key}>I</div>
            <div className={Styles.key}>O</div>
            <div className={Styles.key}>P</div>
          </div>
          <div className={Styles.secondRow}>
            <div className={Styles.key}>A</div>
            <div className={Styles.key}>S</div>
            <div className={Styles.key}>D</div>
            <div className={Styles.key}>F</div>
            <div className={Styles.key}>G</div>
            <div className={Styles.key}>H</div>
            <div className={Styles.key}>J</div>
            <div className={Styles.key}>K</div>
            <div className={Styles.key}>L</div>
          </div>
          <div className={Styles.thirdRow}>
            <div className={Styles.key}>ENTER</div>
            <div className={Styles.key}>Z</div>
            <div className={Styles.key}>X</div>
            <div className={Styles.key}>C</div>
            <div className={Styles.key}>V</div>
            <div className={Styles.key}>B</div>
            <div className={Styles.key}>N</div>
            <div className={Styles.key}>M</div>
            <div className={Styles.key}>BKS</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Game;
