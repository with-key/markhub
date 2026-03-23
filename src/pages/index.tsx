import {
  description,
  hero,
  kicker,
  main,
  notes,
  page,
  title,
} from "@/styles/Home.css";

export default function Home() {
  return (
    <div className={page}>
      <main className={main}>
        <div className={hero}>
          <p className={kicker}>Next.js Starter</p>
          <h1 className={title}>Pages Router, TypeScript, pnpm, TanStack Query</h1>
          <p className={description}>
            The project is initialized and ready. Start building from{" "}
            <code>src/pages/index.tsx</code> and use React Query anywhere under{" "}
            <code>src/pages/_app.tsx</code>.
          </p>
        </div>
        <div className={notes}>
          <p>
            Run <code>pnpm dev</code> to start the development server.
          </p>
          <p>
            Create API routes in <code>src/pages/api</code>.
          </p>
        </div>
      </main>
    </div>
  );
}
