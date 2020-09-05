import React, { useMemo, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { ICompilation } from "types";
import { encode, decode } from "helpers/payload";
import useInput from "hooks/input";
import "./style.css";

const defaultProjectObj: ICompilation = {
  version: "1.0.0",
  data: {
    title: "",
    author: "",
    playlist: {},
  },
};

const defaultProjectPayload = encode(defaultProjectObj);

export default function EditorStart() {
  const history = useHistory();
  const [code, codeInput] = useInput();

  const valid = useMemo(() => {
    try {
      decode(code);
      return true;
    } catch {
      return false;
    }
  }, [code]);

  const load = useCallback(() => {
    history.push("/editor/" + code);
  }, [history, code]);

  return (
    <div className="EditorStart">
      <Link to={"/editor/" + defaultProjectPayload}>
        <div className="EditorStart--new">Create a new project</div>
      </Link>

      <div className="EditorStart--or">Or</div>

      <div className="EditorStart--load">
        <div>Load an existing project</div>

        <input
          type="text"
          placeholder="Paste your project code"
          {...codeInput}
        />

        <button disabled={!valid} onClick={load}>
          Load
        </button>
      </div>
    </div>
  );
}
