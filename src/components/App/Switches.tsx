import React from "react";
import { Route, Routes } from "react-router-dom";
import { Greetings } from "../../Shared/Greetings/Greetings.tsx";
import { Button } from "../../Shared/Button/Button.tsx";

export const Switches = () => {
  return (
    <Routes>
      <Route path='/' element={<Greetings/>}/>
      <Route path='/page1' element={<h1 style={{height: '100px', background: 'lightyellow', fontSize: '25px'}}>page 1</h1>}/>
      <Route path='/page2' element={<h1 style={{height: '100px', background: 'skyblue', fontSize: '25px'}}>page 2</h1>}/>
      <Route path='*' element={<><h1 style={{height: '100px', background: 'teal', fontSize: '55px'}}>Иди на хуй с несуществующей страницы чОрт</h1><Button link={'/'}/></>}/>
    </Routes>
  );
};