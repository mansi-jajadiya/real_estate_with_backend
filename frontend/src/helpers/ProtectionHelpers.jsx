const withProtection = (Component, allowedRoles) => {
  return (
    <ProtectedRoute
      element={() => (
        <EnhancedErrorBoundary name={Component.name}>
          <Component />
        </EnhancedErrorBoundary>
      )}
      allowedRoles={allowedRoles}
    />
  );
};

const withPublic = (Component) => {
  return (
    <PublicRoute
      element={() => (
        <EnhancedErrorBoundary name={Component.name}>
          <Component />
        </EnhancedErrorBoundary>
      )}
    />
  );
};
