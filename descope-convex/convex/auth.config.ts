export default {
  providers: [
    {
      domain: `api.descope.com/${process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID}`,
      applicationID: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
    },
  ],
};
