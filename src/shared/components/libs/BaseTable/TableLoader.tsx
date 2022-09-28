interface TableLoaderProps {}

// export function TableLoader({}: TableLoaderProps): JSX.Element {
//   return <Loader />;
// }

export function TableLoader() {
  return (
    <div className="w-full rounded-md p-4">
      <div className="flex animate-pulse space-x-4">
        <div className="flex-1 py-1">
          <div className="h-6 rounded bg-slate-300" />
        </div>
      </div>
    </div>
  );
}
