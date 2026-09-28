import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = "ezhevika-show";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repositoryName}` : "",
  },
  ...(isGitHubPages
    ? {
        output: "export",
        basePath: `/${repositoryName}`,
        assetPrefix: `/${repositoryName}/`,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
