import React from 'react';
import style from './Map.module.css'

  function Maps (props: any) {
    return(
        <div className={style.map__block}>
<iframe className={style.maps} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d69811.8059252717!2d60.6076928!3d56.85248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1607602643015!5m2!1sru!2sru"></iframe>
</div>
    )
 };

 export default Maps