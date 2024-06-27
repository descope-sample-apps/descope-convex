export default {
  providers: [
    {
      domain: process.env.NEXT_PUBLIC_ISSUER_URL,
      applicationID: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID,
    },
  ],
};
