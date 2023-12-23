import { ErrorBoundary } from "@/components/error-boundary";
import { Loading } from "@/components/loading";
import React from "react";

/** 考虑速度，但是关闭懒加载 */
// const Component = React.lazy(() => import(/* webpackChunkName: "Search" */ "./Page"));
import Component from "./Page";

const Loader: React.FC = () => {
  return (
    <ErrorBoundary>
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default Loader;
