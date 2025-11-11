import InputFocusExample from "../components/InputFocusExample";
import UseIdExample from "../components/UseIdExample";
import ParentComponent from "../components/UseImperativeHandle";
import DeferredValueExample from "../components/UseDefferdValudExample";
import UseTransitionExample from "../components/UseTransitionExample";

export default function ExamplePage() {
  return (
    <div>
      <h1>ExamplePage</h1>
      <InputFocusExample />
      <ParentComponent />
      <UseIdExample />
      <DeferredValueExample />
      <UseTransitionExample />
    </div>
  );
}
