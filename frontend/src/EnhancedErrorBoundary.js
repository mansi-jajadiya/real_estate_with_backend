
import React from "react";

export default class EnhancedErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, info: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    
    console.group("%c🔥 React Runtime Error", "color: red; font-weight: bold;");
    console.error("Message:", error.message);
    console.error("Full error object:", error);
    console.error("Component stack:\n", info.componentStack);
    console.groupEnd();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", background: "#ffefef", color: "#900" }}>
          <h2>⚠ Something broke in <b>{this.props.name}</b></h2>
          <p>Check the console for the exact component stack trace.</p>
        </div>
      );
    }
    return this.props.children;
  }
}
