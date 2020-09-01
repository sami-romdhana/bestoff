import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICompilation } from "types";
import { Player } from "components/Player";
import "./style.css";

export default function Compilation() {
  const { data: encodedData } = useParams();

  const compilation = useMemo(
    () => JSON.parse(atob(encodedData)) as ICompilation,
    [encodedData]
  );

  return (
    <div className="Compilation">
      <h2>{compilation.data.title}</h2>

      <p>
        <span>Compilation by</span> {compilation.data.author}
      </p>

      <Player playlist={compilation.data.playlist} />
    </div>
  );
}
