export function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Hi, I’m Your Name.</h1>
      <p className="leading-relaxed opacity-90">
        Short about. What you do, what you care about, what you build.
      </p>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Links</h2>
        <ul className="list-disc pl-5">
          <li>
            <a
              className="underline underline-offset-4"
              href="https://github.com/yourname"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="underline underline-offset-4"
              href="https://www.linkedin.com/in/yourname"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
