import { Outlet } from "react-router-dom";
import { Container } from "./Container";
import { Nav } from "./Nav";

export function AppLayout() {
  return (
    <div className="min-h-dvh">
      <header className="border-b">
        <Container>
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-semibold">Your Name</div>
            <Nav />
          </div>
        </Container>
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>

      <footer className="border-t">
        <Container>
          <div className="text-xs opacity-70">
            © {new Date().getFullYear()} Your Name
          </div>
        </Container>
      </footer>
    </div>
  );
}
