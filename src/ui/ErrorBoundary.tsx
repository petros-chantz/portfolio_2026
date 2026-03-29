import { Component, type ErrorInfo, type ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="space-y-3 p-6">
          <h1 className="text-2xl font-semibold">Something went wrong</h1>
          <p className="opacity-80">An unexpected error occurred.</p>
          <Link className="underline underline-offset-4" to="/">
            Go home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
