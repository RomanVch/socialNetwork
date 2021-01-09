import React from 'react';
import style from './FileBox.module.css'
import pdf from './img/pdf.svg'

  function FileBox (props: any) {

    return(
<div className={style.FileBox__block}>
<div className={style.FileBox__flex_block}>
 <img src={pdf}/>   <p>Имя файла:</p> <p>Doclad.pdf</p> <p>Вес файла:</p> <p>100 кб</p> <button>cкачать</button><button>удалить</button>
</div>

</div>
    )  
 };

 export default FileBox