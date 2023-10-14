import React from "react";
import { BaseLayout } from '../BaseLayout/BaseLayout.tsx';
import { Switches } from "./Switches.js";

export const App = () => {
  return (
    <BaseLayout>
      <Switches />
    </BaseLayout>
  );
};
