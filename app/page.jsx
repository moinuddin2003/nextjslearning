import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <h1>Welcome! I am Coming from Clerk </h1>

      <Show when="signed-out">
        <SignInButton />
        <SignUpButton />
      </Show>

      <Show when="signed-in">
        <UserButton />
      </Show>
    </main>
  );
}
