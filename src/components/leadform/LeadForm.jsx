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
  value="https://new-landing-vmt.vercel.app/thank-you"
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
  <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
  <option value="Google Ads">Google Ads (Search & Display)</option>
  <option value="SEO">Search Engine Optimization (SEO)</option>
  <option value="Social Media Management">Social Media Management</option>
  <option value="Personal Branding">Personal Branding</option>
  <option value="LinkedIn Growth">LinkedIn Growth Strategy</option>
  <option value="Website Development">Website Development</option>
  <option value="Complete Performance Marketing">
    Complete Performance Marketing (Full Funnel)
  </option>
</select>


        <select name="budget" required>
  <option value="">Monthly Ad Budget *</option>
  <option value="Below 25k">Below ₹25,000</option>
  <option value="25k-50k">₹25,000 - ₹50,000</option>
  <option value="50k-1L">₹50,000 - ₹1,00,000</option>
  <option value="1L+">Above ₹1,00,000</option>
</select>


        <button type="submit">
          Get Free Strategy Plan →
        </button>
      </form>

      <small>No spam. 100% privacy.</small>
    </div>
  );
}
