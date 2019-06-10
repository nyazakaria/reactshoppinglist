import React from 'react';

const ItemListe = (props) => {

    const articletab = props.articles;
    
    return (
        <>
        <div>ItemListe component</div>
      {articletab.map(
            (a) => {
                return (
                    <ul key={a.id}>
                    <li >{ a.name} : { a.quantity}</li>
                    </ul>
                );
            }
        )}
        </>
    );
}

export default ItemListe;