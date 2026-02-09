import "./LeadForm.css";

export default function LeadForm({ variant }) {
  return (
    <div className={`form-card ${variant === "mobile" ? "form-mobile" : ""}`}>
      <h3>Get Your Free Growth Plan</h3>
      <p>Fill the form and our team will contact you shortly.</p>

      <form
        action="https://formsubmit.co/sanjanaannam8795@gmail.com"
        method="POST"
      >
        {/* Disable captcha */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Redirect after submit */}
              <input
  type="hidden"
  name="_next"
  value="http://localhost:5173/thank-you"
/>


        {/* Email subject */}
        <input
          type="hidden"
          name="_subject"
          value="New Lead from VMT Website"
        />

        {/* Honeypot anti-spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          required
        />

        <input
          type="text"
          name="business"
          placeholder="Business Name *"
          required
        />

        <select name="service" required>
          <option value="">Select Service *</option>
          <option value="Meta Ads">Meta Ads</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Full Funnel">Full Funnel</option>
          <option value="Branding">Branding</option>
        </select>

        <select name="budget" required>
          <option value="">Monthly Ad Budget *</option>
          <option value="Under 50K">Under ₹50K</option>
          <option value="50K-1L">₹50K–₹1L</option>
          <option value="1L-5L">₹1L–₹5L</option>
          <option value="5L+">₹5L+</option>
        </select>

        <button type="submit">
          Get Free Strategy Plan →
        </button>
      </form>

      <small>No spam. 100% privacy.</small>
    </div>
  );
}
