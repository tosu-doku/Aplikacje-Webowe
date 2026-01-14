import React, { useState } from 'react';

const Przyklad6 = () => {
    const [a, setA] = useState(false)
    const [b, setB] = useState(0)

    return (
        <div>
            <button onClick={() => setA(!a)}> A = ~A</button>
            <br /><br />
            <button onClick={() => setB(b+1)}>B = B + 1</button>
            <br /><br />
            {(b%2 == 0) ? <div>b parzyste = {b}</div> : <div>b nieparzyste = {b}</div>}
            {a && <div>Pokazuje sie tylko gdy A = true</div>}
        </div>
    );
};

export default Przyklad6;

/*
    const x = false 
    const wartosc = x ? 5 : 10 
    // zmienna ? jezeliTrue : jezeliFalse 

    let wartosc2;
    if(x) wartosc2 = 5 
    else wartosc2 = 10

    React conditional rendering

    function cos() {
        const c = 5 
        if(c == 5) {
            return "jest5"
        } else {
            return "niejest5"
        }
        //return (c==5) ? "jest5" : "niejest5"
    }
*/