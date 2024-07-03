import React from "react";
import { Loader } from "@/app/components/loader";

const loading = () => {
  return (
    <div className="loading">
      <Loader isLoading />
    </div>
  );
};

export default loading;
