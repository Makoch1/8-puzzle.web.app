import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "../features/navbar/components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <div style={{ display: 'flex', minHeight: '100dvh' }}>
      <div style={{ display: 'flex', minWidth: '200px' }}>
        <Navbar />
      </div>
      <div style={{ width: '100%' }}>
        <Outlet />
      </div>
    </div>
  )
})
