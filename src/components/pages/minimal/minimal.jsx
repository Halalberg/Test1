import React, { useContext } from 'react';
import Layout from '../../shared/layout';
import './minimal.styles.scss';


const Minimal = () => {
    return (
<Layout>
       
<div className='masthead'>
 
</div>
<div className="introduction-section">
    <h1>Pyssel utan slöseri</h1>
    <p>  
Innehållet i hantverkskitet är tillräckligt för att skapa 1 tvål, 2-4 lerfigurer, 2-4 smycken. 
Varför vi valt att begränsa innehållet i kitet är att ni ska få möjligheten att lära känna ett hantverk och därefter göra ett eget val om ni vill rikta er in på ett specifikt hantverk eller inte. 
 </p>
 <p>
Allt i hantverkskitet är återanvändningsbart! Följ vår instagram för roliga och användbara tips.</p>
</div>


        </Layout>
);

}

export default Minimal;