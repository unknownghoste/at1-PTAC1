import {useState} from "react";

export default function Main(){
  const [nome, setNome] = useState("");

  return(
    <Main>
      <input
      type="text"
      name="nome-contato"
      id="nome"
      onChange={(event)=> setNome(event.target.value)}
    />

    {nome}
    </Main>
  );
}

export default function Main(){
  const [telefone, setTelefone] = useState("");

  return(
    <Main>
      <input
      type="number"
      name="telefone-contato"
      id="telefone"
      onChange={(event)=> setNome(event.target.value)}
    />

    {telefone}
    </Main>
  );
}