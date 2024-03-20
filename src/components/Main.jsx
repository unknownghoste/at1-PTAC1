import {useState} from "react";

export default function Main(){
  return(
    <Main>
      <input
      type="text"
      name=""
      id=""
      onChange={(event)=> setNome(event.target.value)}
    />

    {nome}
    </Main>
  );
}