import { useRouter } from "next/router";

export const useCurrentPath = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  const isMatchCurrentPath = (path: string) => {
    const spiltCurrentPath = currentPath?.split("/");

    // /super-admin -> ["", "super-admin"]
    const rootPath = path.split("/")[1];

    // ["", "super-admin"] -> ["super-admin"] -> true
    if (spiltCurrentPath?.includes(rootPath)) return true;
  };

  return { isMatchCurrentPath };
};
