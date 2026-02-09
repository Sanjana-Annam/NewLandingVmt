import { useEffect } from "react";

export default function ThankYou() {

  useEffect(() => {
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#02010a",
      color: "white"
    }}>
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>Our team will contact you shortly.</p>
      </div>
    </div>
  );
}
