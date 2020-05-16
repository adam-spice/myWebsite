module.exports = {
  apps: [
    {
      name: "websiteBackend",
      cwd: "/home/your-name/my-strapi-project/my-project",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        DATABASE_HOST: "localhost", // database endpoint
        DATABASE_PORT: "5432",
        DATABASE_NAME: "strapi", // DB name
        DATABASE_USERNAME: "your-name", // your username for psql
        DATABASE_PASSWORD: "password", // your password for psql
      },
    },
  ],
};
