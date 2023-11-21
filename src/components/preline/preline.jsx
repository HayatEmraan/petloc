"use client";

import { useEffect } from "react";

const Preline = () => {
  useEffect(() => {
    import("preline");
  }, []);
};

export default Preline;
