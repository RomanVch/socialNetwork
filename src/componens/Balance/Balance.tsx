import React from 'react';
import style from './Balance.module.css'

  function Balance (props: any) {
    return(
<div className={style.balance__block}>
    <div className={style.balance__text}>
  <p>Ваш баланс:</p><p className={style.balance__price}>  25 гривен</p>
    </div>
        <button>пополнить</button>
    <button>вывести</button>
</div>
    )
 };

 export default Balance