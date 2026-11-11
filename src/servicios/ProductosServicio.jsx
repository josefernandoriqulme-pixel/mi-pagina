import React from 'react';

export function getAllProductos() {

    
    return fetch("http://localhost:3000/home").then(res => res.json());
}