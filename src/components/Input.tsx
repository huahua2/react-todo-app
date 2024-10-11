import React, { useCallback } from "react";
import { Input } from '@chakra-ui/react'

const sanitize = (string: string): string => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  // @ts-ignore
  return string.replace(reg, (match) => map[match]);
};

const hasValidMin = (value: [], min: number) => {
  return value.length >= min;
};


export function TodoInput({ onSubmit, placeholder, label, defaultValue, onBlur }: {
  onSubmit: Function, placeholder: string, label: string, defaultValue?: string, onBlur?: Function
}) {
  const handleBlur = useCallback(() => {
    if (onBlur)
      onBlur();
  }, [onBlur]);

  const handleKeyDown = useCallback(
    // @ts-ignore
    (e) => {
      if (e.key === "Enter") {
        const value = e.target?.value.trim();

        if (!hasValidMin(value, 2))
          return;

        onSubmit(sanitize(value));
        e.target!.value = "";
      }
    },
    [onSubmit]
  );

  return (
    <div className="input-container">

      <Input placeholder={ placeholder } size='lg' mb='30' autoFocus defaultValue={defaultValue} onBlur={handleBlur} onKeyDown={handleKeyDown}  />

    </div>
  );
}
