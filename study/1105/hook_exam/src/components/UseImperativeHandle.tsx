import { useRef, useImperativeHandle, forwardRef } from "react";

// 자식 컴포넌트
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: () => {
      if (inputRef.current) inputRef.current!.value = "";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="자식 인풋 입력"
      className="border p-2"
    />
  );
});

// 부모 컴포넌트
function ParentComponent() {
  const inputRef = useRef<{ focus: () => void; clear: () => void }>(null);

  return (
    <div className="border p-4">
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
      <button onClick={() => inputRef.current?.clear()}>클리어</button>
    </div>
  );
}

export default ParentComponent;
