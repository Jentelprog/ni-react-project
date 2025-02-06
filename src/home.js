import { useState } from "react";
export default function Home(){
    const [isvisibale,setisvisibale]=useState(false);
    function handelClick(){
        setisvisibale(true)
        alert('ahh,click me harder');
    }
    return (
        <div>
            {!isvisibale && <h1>press the button</h1>}
            <button onClick={handelClick}>i am a small button {isvisibale && <p>i did not concent</p>}</button>
            {isvisibale && <h1>you pedo</h1>}
        </div>
    )
}
