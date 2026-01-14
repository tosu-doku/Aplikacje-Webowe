import React from 'react';

const Przyklad10a = ({ zwiekszA }: any) => {
    return (
        <div>
            <button onClick={() => zwiekszA()}>
                Zwiększ A!
            </button>
        </div>
    );
};

export default Przyklad10a;