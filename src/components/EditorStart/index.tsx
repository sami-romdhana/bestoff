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
  const payload = useMemo(() => {
    try {
      const payload =
        code.includes("/editor/") || code.includes("/compilation/")
          ? code.match(/\/(editor|compilation)\/(\S*)$/)?.[2] ?? code
          : code;

      decode(payload);

      return payload;
    } catch {
      return null;
    }
  }, [code]);

  const load = useCallback(() => {
    history.push("/editor/" + payload);
  }, [history, payload]);

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

        <button disabled={payload === null} onClick={load}>
          Load
        </button>
      </div>
    </div>
  );
}
