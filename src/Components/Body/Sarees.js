import React from 'react';
import Saree from './Saree';
import style from './style.module.css'
import {Container } from 'react-bootstrap'

const SareeList = ({ sarees, addToCart }) => {
    return (
        
        <div className={style.sareeList}>
            {sarees.map(saree => (
                <Saree saree={saree}></Saree>
            ))}
        </div>
       
    );
};

export default SareeList;
