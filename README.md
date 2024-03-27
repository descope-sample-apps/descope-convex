````markdown
# Descope Convex Sample App 🚀

This sample app showcases how to implement authentication in your Convex application using Descope.

## 🧐 Under the Hood

Here's what happens when a user interacts with the authentication flow:

1. The user clicks a **Login** button.
2. They are redirected to a page where they log in via the method configured in Descope.
3. After successful login, Descope redirects back to the original page.
4. Descope's `AuthProvider` now recognizes the user as authenticated.
5. `ConvexProviderWithDescope` fetches an auth token from Descope.
6. `ConvexReactClient` passes this token down to your Convex backend to validate.
7. Your Convex backend validates the token with Descope to ensure its validity.
8. `ConvexProviderWithDescope` manages token refetching as needed to maintain user authentication with your backend.

## 🌟 Overview of the Application

Upon landing, users encounter a **Log in** button. Once authenticated:

- Users' numbers in their database persist to a `numbers` table.
- Generating and adding a new number appends it to the list via a Convex mutation.
- A "Log Out" button allows users to end their session.

## Setting up the App

Setting up the app involves a few additional steps due to the authentication feature:

1. Populate `.env.local.example` with your values:

```env
CONVEX_DEPLOYMENT=dev:dynamic-example
NEXT_PUBLIC_CONVEX_URL=https://dynamic-example.convex.cloud
NEXT_PUBLIC_DESCOPE_PROJECT_ID="<Your Descope Project ID>"
```
````

2. Launch the app. You'll encounter an error message containing a link directing you to your Convex dashboard to configure your environment variables. Complete this setup and configure the `NEXT_PUBLIC_DESCOPE_PROJECT_ID` in Convex as well.

3. In your **Descope Project Settings**, ensure **Generate AWS API Gateway Compliant JWT** is enabled. This adjusts the Issuer URL in the OIDC token to align with Convex specifications.

4. Navigate to the project directory and install the necessary dependencies:

```bash
yarn install
```

After these steps, you're set to sign in and explore the application!

## 🏃‍♂️ Running the App

Once you've configured your app, you're ready to run it:

```bash
yarn dev
```

This command starts the Next.js development server, making your app accessible at [http://localhost:3000](http://localhost:3000).

## Support :raised_hands:

If you encounter any issues or have questions, consult the Grafbase and Descope documentation, or reach out to our [support](https://www.descope.com/contact) for assistance.

- [Convex Documentation](https://docs.convex.dev/auth/custom-auth)
- [Descope Authentication](https://docs.descope.com)

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or improvements.

## License

This sample app is open-source and available under the MIT License. See the LICENSE file for more details.
