import React from 'react';
import { gamingBackground } from "../../styles/Styles/Styles";
import Item from '../../pages/Item/Item';

const ItemDetailContainer = ({ game }) => {
    return (
        <>
            <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
                <Item game={game} />
            </div>
        </>
    )
}

export default ItemDetailContainer;