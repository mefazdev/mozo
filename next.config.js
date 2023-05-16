module.exports = {
  // useFileSystemPublicRoutes: false,
    async redirects() {
      return [
        {
          source: '/admin/blog',
          destination: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/admin/auth/login`,
          permanent: true
        }
      ];
    }
  };

