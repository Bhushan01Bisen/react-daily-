import { ARedux } from "./ARedux";
import { BRedux } from "./BRedux";
import { CRedux } from "./CRedux";

export const ParentRedux = () => {
  return (
    <div>
      <ARedux />
      <BRedux />
      <CRedux />
    </div>
  );
};
