import { useState } from "react";

export default function useInput(
  defaultValue: string = ""
): [
  string,
  {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => unknown;
  },
  (value: string) => unknown
] {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const inputProps = {
    value,
    onChange,
  };

  return [value, inputProps, setValue];
}
