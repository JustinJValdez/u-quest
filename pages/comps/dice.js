import styles from "../../styles/Dice.module.css"

export default function Dice() {

 function roll (){
    var rnd = Math.floor(Math.random()* 20);
    document.getElementById('dice').innerHTML = rnd;
  }
  
  return (

    <div>
      DICE FEATURE
      <div className={styles.dice}>
        <button id='dice' onClick={roll}>Roll Da Dice</button>
      </div>
    </div>

  )
  
  
};
