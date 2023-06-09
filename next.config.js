const nextMDX = require("@next/mdx");

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["res.cloudinary.com"],
  },
  experimental: {
    appDir: true,
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
