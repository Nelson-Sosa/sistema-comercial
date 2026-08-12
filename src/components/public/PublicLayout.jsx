import { Outlet, Link } from "react-router-dom";
import { LogIn, LayoutDashboard, LogOut } from "lucide-react";
import WhatsappFloat from "./WhatsappFloat";
import { BRAND } from "../../config/brand";
import { useAuth } from "../../context/AuthContext";

export default function PublicLayout() {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-background-secondary">
      <header className="sticky top-0 z-40 border-b border-border bg-white/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/catalogo" className="flex items-center gap-3 min-w-0">
            <img
              src={BRAND.logo}
              alt={BRAND.name}
              className="h-24 w-auto shrink-0 object-contain"
            />
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold tracking-tight text-gray-800 sm:text-lg">
                {BRAND.name}
              </p>
              <p className="-mt-0.5 truncate text-[11px] font-medium text-gray-500">
                Catálogo de productos
              </p>
            </div>
          </Link>

          {user ? (
            user.role === "admin" ? (
              <Link
                to="/admin/dashboard"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-primary bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden sm:inline">Ir al Panel</span>
                <span className="sm:hidden">Panel</span>
              </Link>
            ) : (
              <div className="flex shrink-0 items-center gap-2">
                {/* Avatar: foto de Google o iniciales */}
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="avatar"
                    className="h-8 w-8 rounded-full border-2 border-primary-soft object-cover"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {(user.email || "U")[0].toUpperCase()}
                  </div>
                )}
                {/* Email del usuario (solo en pantallas medianas y mayores) */}
                <span className="hidden max-w-[120px] truncate text-sm font-medium text-gray-700 md:block">
                  {user.email}
                </span>
                {/* Botón de cerrar sesión */}
                <button
                  onClick={() => logout()}
                  title="Cerrar sesión"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-white px-3 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-danger hover:text-danger hover:shadow-md"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Cerrar sesión</span>
                </button>
              </div>
            )
          ) : (
            <Link
              to="/login"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all hover:border-primary hover:text-primary hover:shadow-md"
            >
              <LogIn className="h-4 w-4" />
              <span className="hidden sm:inline">Iniciar sesión</span>
              <span className="sm:hidden">Ingresar</span>
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <Outlet />
      </main>

      <WhatsappFloat />

      <footer className="border-t border-border bg-white py-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} {BRAND.name} - {BRAND.fullName} &mdash; Todos los derechos reservados.
      </footer>
    </div>
  );
}
