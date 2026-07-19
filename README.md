<img width="1920" height="1221" alt="image" src="https://github.com/user-attachments/assets/6d9e32e9-5e9c-4b1b-a2e6-5741b97688ed" /><img width="1048" alt="image" src="https://github.com/descope-sample-apps/descope-convex/assets/32936811/f82b765e-4625-4b43-af1b-e3fa10a050b1">

# Descope Convex Sample App 🚀

This sample app showcases how to implement authentication in your Convex application using Descope.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdescope-sample-apps%2Fdescope-convex&env=CONVEX_DEPLOYMENT,NEXT_PUBLIC_CONVEX_URL,NEXT_PUBLIC_DESCOPE_PROJECT_ID)

## Under the Hood 🧐

Here's what happens when a user interacts with the authentication flow:

1. The user clicks a **Login** button.
2. They are redirected to a page where they log in via the method configured in Descope.
3. After successful login, Descope redirects back to the original page.
4. Descope's `AuthProvider` now recognizes the user as authenticated.
5. `ConvexProviderWithDescope` fetches an auth token from Descope.
6. `ConvexReactClient` passes this token down to your Convex backend to validate.
7. Your Convex backend validates the token with Descope to ensure its validity.
8. `ConvexProviderWithDescope` manages token refetching as needed to maintain user authentication with your backend.

## Overview of the Application 🌟

Upon landing, users encounter a **Log in** button. Once authenticated:

- Users' numbers in their database persist to a `numbers` table.
- Generating and adding a new number appends it to the list via a Convex mutation.
- A "Log Out" button allows users to end their session.

## Setting up the App 💿

Setting up the app involves a few additional steps due to the authentication feature:

1. Copy over the `.env.local.example` to a `.env.local` file with your specific values:

```env
CONVEX_DEPLOYMENT=dev:<Your Convex Project>
NEXT_PUBLIC_CONVEX_URL= <Your Convex URL>
NEXT_PUBLIC_DESCOPE_PROJECT_ID="<Your Descope Project ID>"
NEXT_PUBLIC_ISSUER_URL="<Your Issuer URL>"
```
`NEXT_PUBLIC_ISSUER_URL`: can be found in your Descope Console under the [Applications page](https://app.descope.com/applications) and editing the active application

2. Launch the app. You'll encounter an error message containing a link directing you to your Convex dashboard to configure your environment variables. Complete this setup and configure the `NEXT_PUBLIC_DESCOPE_PROJECT_ID` in Convex as well.

![Convex Dashboard](https://github.com/descope-sample-apps/descope-convex/assets/32936811/00f0a47c-00a5-4309-abab-f911dd3b698b)

3.
a. In your Descope Console, go to Project Settings → JWT Templates and create a new User JWT template using the AWS API Gateway preset. This sets the Issuer URL to https://api.descope.com/<Project ID>, aligning the token with Convex's OIDC requirements.

b. Go to Project Settings → Session Management → User JWT Token Format and set it to the template you just created.

![Descope Project Settings](https://github.com/user-attachments/assets/e12a53f7-910c-4a86-bcba-f55b88f11e6d)


4. Navigate to the project directory and install the necessary dependencies:

```bash
yarn install
```

After these steps, you're set to sign in and explore the application!

## Running the App 🏃‍♂️

Once you've configured your app, you're ready to run it:

```bash
yarn dev
```

This command starts the Next.js development server, making your app accessible at [http://localhost:3000](http://localhost:3000).

## Support :raised_hands:

If you encounter any issues or have questions, consult the Grafbase and Descope documentation, or reach out to our [support](https://www.descope.com/contact) for assistance.

- [Convex Documentation](https://docs.convex.dev/auth/custom-auth)
- [Descope Authentication](https://docs.descope.com)

## Contributing 🤝

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License 📄

This sample app is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more details.
