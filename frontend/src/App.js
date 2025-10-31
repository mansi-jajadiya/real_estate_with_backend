import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EnhancedErrorBoundary from "./EnhancedErrorBoundary";
import ProtectedRoute from "./components/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// user pages
import Home from "./pages/Home";
import ProductDetail from "./pages/Productdetail";
import CategoryDetail from "./pages/CategoryDetail";
import Agentsprofile from "./pages/Agentsprofile";
import About from "./pages/About";
import ForRent from "./pages/ForRent";
import Ouragents from "./pages/Ouragents";
import Cart from "./pages/Cart";
import Wish from "./pages/Wish";
import PreviewPage from "./pages/PreviewPage";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import DuplicateError from "./components/blog/BlogDetails/commentpart/DuplicateError";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import LoginPage from "./components/login_and_signup/LoginPage";
import SignupPage from "./components/login_and_signup/SignupPage";
// admin panel
import AdminLayout from "./components/adminpanel/AdminLayout";
import Allagentpage from "./components/adminpanel/agents/Allagentpage";
import Addagent from "./components/adminpanel/agents/Addagent";
import Editagent from "./components/adminpanel/agents/Editagent";
import Adminrent from "./components/adminpanel/for rent admin/Adminrent";
import AdminDashboard from "./components/adminpanel/dashboard/AdminDashboard ";
import Userinfo from "./components/adminpanel/users/Userinfo";
import PublicRoute from "./components/PublicRoute";
import ContactUs from "./components/adminpanel/contactus/ContactUs";
import Book from "./components/adminpanel/booking/book";

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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={withPublic(LoginPage)} />
        <Route path="/register" element={withPublic(SignupPage)} />

        {/* Protected user routes */}
        <Route path="/" element={withProtection(Home, ["user"])} />
        <Route
          path="/product/:id"
          element={withProtection(ProductDetail, ["user"])}
        />

        <Route
          path="/category/:id"
          element={withProtection(CategoryDetail, ["user"])}
        />
        <Route
          path="/agents/:id"
          element={withProtection(Agentsprofile, ["user"])}
        />
        <Route path="/about" element={withProtection(About, ["user"])} />
        <Route path="/forrent" element={withProtection(ForRent, ["user"])} />
        <Route
          path="/ouragents"
          element={withProtection(Ouragents, ["user"])}
        />
        <Route path="/addtocart" element={withProtection(Cart, ["user"])} />
        <Route path="/wishlist" element={withProtection(Wish, ["user"])} />
        <Route
          path="/previewpage/:id"
          element={withProtection(PreviewPage, ["user"])}
        />
        <Route path="/contact" element={withProtection(Contact, ["user"])} />
        <Route path="/BlogPage" element={withProtection(Blog, ["user"])} />
        <Route
          path="/blog/:id"
          element={withProtection(BlogDetailsPage, ["user"])}
        />
        <Route
          path="/commentpart/duplicate-error"
          element={withProtection(DuplicateError, ["user"])}
        />

        {/* Admin routes */}
        <Route path="/admin" element={withProtection(AdminLayout, ["admin"])}>
          <Route
            path="agent"
            element={withProtection(Allagentpage, ["admin"])}
          />
          <Route
            path="addagent"
            element={withProtection(Addagent, ["admin"])}
          />
          <Route
            path="editagent/:id"
            element={withProtection(Editagent, ["admin"])}
          />
          <Route
            path="adminrent"
            element={withProtection(Adminrent, ["admin"])}
          />
          <Route
            path="dashboard"
            element={withProtection(AdminDashboard, ["admin"])}
          />
          <Route path="user" element={withProtection(Userinfo, ["admin"])} />
          <Route
            path="contact"
            element={withProtection(ContactUs, ["admin"])}
          />
        <Route
            path="booking"
            element={withProtection(Book, ["admin"])}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
