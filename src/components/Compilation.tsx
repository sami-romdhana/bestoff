import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ICompilation } from "types";
import { Player } from "./Player";

export default function Compilation() {
  const { data: encodedData } = useParams();

  const compilation = useMemo(
    () => JSON.parse(atob(encodedData)) as ICompilation,
    [encodedData]
  );

  return (
    <div>
      <p>{compilation.data.title}</p>

      <Player playlist={compilation.data.playlist} />
    </div>
  );
}
