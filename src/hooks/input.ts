import { useState } from "react";

export default function useInput(): [
  string,
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  }
] {
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputProps = {
    value,
    onChange,
  };

  return [value, inputProps];
}
