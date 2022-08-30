import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";

export function FullPageLoader(): JSX.Element {
  return (
    <div className="flex items-center justify-center h-screen">
      <LoadingSpinner fillColor="primary" size="text-5xl" />
    </div>
  );
}
