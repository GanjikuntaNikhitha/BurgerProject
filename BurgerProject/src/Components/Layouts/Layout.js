import React from 'react';
/*import Aux from '../../Hod/Nextaux';*/
const layout = (props) => (
/* <Aux>*/
    <div>
    <div>
        TooBar , SIdeNav , BackDrop
    </div>
    <main>
        {props.children}
        </main>
        </div>
/*</Aux>*/
)


export default layout;