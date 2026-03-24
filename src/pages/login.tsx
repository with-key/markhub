import type { FormEvent } from "react";
import {
  auxiliaryLink,
  brand,
  card,
  divider,
  dividerLine,
  field,
  fieldHeader,
  footer,
  footerCopy,
  footerInner,
  footerLink,
  footerNav,
  form,
  heading,
  heroContent,
  heroDescription,
  heroFootnote,
  heroGlow,
  heroPanel,
  heroTitle,
  input,
  intro,
  label,
  loginSection,
  loginShell,
  main,
  mobileBrand,
  page,
  signUp,
  signUpLink,
  socialButton,
  socialGrid,
  socialIcon,
  subheading,
  submitButton,
} from "@/styles/Login.css";

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export default function Login() {
  return (
    <div className={page}>
      <main className={main}>
        <section className={heroPanel} aria-label="Editorial sanctuary introduction">
          <p className={brand}>The Sanctuary</p>
          <div className={heroContent}>
            <h1 className={heroTitle}>
              The Stoic
              <br />
              Curator
            </h1>
            <p className={heroDescription}>
              A professional threshold designed for high-end editorial management.
              Experience clarity through intentional asymmetry.
            </p>
          </div>
          <p className={heroFootnote}>Premium Workspace © 2024</p>
          <div className={heroGlow} aria-hidden="true" />
        </section>

        <section className={loginSection}>
          <div className={loginShell}>
            <p className={mobileBrand}>The Sanctuary</p>
            <div className={card}>
              <div className={intro}>
                <h2 className={heading}>Welcome back</h2>
                <p className={subheading}>
                  Enter your credentials to access the sanctuary.
                </p>
              </div>

              <form className={form} onSubmit={handleSubmit}>
                <div className={field}>
                  <label className={label} htmlFor="email">
                    Email Address
                  </label>
                  <input
                    className={input}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="name@sanctuary.com"
                  />
                </div>

                <div className={field}>
                  <div className={fieldHeader}>
                    <label className={label} htmlFor="password">
                      Password
                    </label>
                    <a className={auxiliaryLink} href="#">
                      Forgot password?
                    </a>
                  </div>
                  <input
                    className={input}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                  />
                </div>

                <button className={submitButton} type="submit">
                  Sign In
                </button>
              </form>

              <div className={divider}>
                <span className={dividerLine} aria-hidden="true" />
                <span>Or continue with</span>
                <span className={dividerLine} aria-hidden="true" />
              </div>

              <div className={socialGrid}>
                <button className={socialButton} type="button" aria-label="Continue with GitHub">
                  <svg className={socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.46 11.46 0 0 1 12 5.8c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0Z" />
                  </svg>
                  GitHub
                </button>

                <button className={socialButton} type="button" aria-label="Continue with Google">
                  <svg className={socialIcon} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09A6.96 6.96 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11.94 11.94 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
              </div>

              <p className={signUp}>
                Don&apos;t have an account?
                <a className={signUpLink} href="#">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className={footer}>
        <div className={footerInner}>
          <p className={footerCopy}>© 2024 The Editorial Sanctuary. All rights reserved.</p>
          <nav className={footerNav} aria-label="Footer navigation">
            <a className={footerLink} href="#">
              Privacy Policy
            </a>
            <a className={footerLink} href="#">
              Terms of Service
            </a>
            <a className={footerLink} href="#">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
