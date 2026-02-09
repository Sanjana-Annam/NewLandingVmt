import "./BookingModal.css";

export default function BookingModal({ isOpen, onClose, form }) {
  if (!isOpen) return null;

  // IMPORTANT: Use proper Zoho service link without # before params
  const bookingBase =
    "https://viralmarketingtrends.zohobookings.in/portal-embed#/406960000000039054";

  const params = new URLSearchParams({
    customer_name: form.name || "",
    customer_email: form.email || "",
    customer_phone: form.phone || ""
  });

  const bookingUrl = `${bookingBase}?${params.toString()}`;

  return (
    <div className="booking-overlay">
      <div className="booking-modal">
        <button className="booking-close" onClick={onClose}>
          ✕
        </button>

        <iframe
          src={bookingUrl}
          title="Book Consultation"
          frameBorder="0"
          allow="camera; microphone"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
