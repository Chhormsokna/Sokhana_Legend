import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./assets/Component/routers/AppRoutes";

import { AuthProvider } from "./assets/Component/context/Authcontext";
import { BookingProvider } from "./assets/Component/context/BookingContext";
import { CartProvider } from "./assets/Component/context/cartcontext";

import Navbar from "./assets/Component/layout/navbar";
import Footer from "./assets/Component/layout/footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <CartProvider>
            <div className="min-h-screen bg-black text-white">
              <Navbar />
              <main>
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </CartProvider>
        </BookingProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
