import { useState, type FormEvent } from "react";
import { trackMetaLead } from "../../utils/analytics";

const WEB3FORMS_ACCESS_KEY = "f1beb110-8892-427a-b77e-701db1bd3ac9";

interface EnquiryFormProps {
  title?: string;
  subtitle?: string;
  idPrefix?: string;
  defaultSubject?: string;
  prefillMessage?: string;
  onSuccess?: () => void;
}

export function EnquiryForm({
  title = "Submit Your B2B Inquiry",
  subtitle = "Direct manufacturer response within 2-4 business hours.",
  idPrefix = "",
  defaultSubject = "New B2B enquiry from National Enterprises website",
  prefillMessage = "",
  onSuccess,
}: EnquiryFormProps) {
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Spam honeypot
    if (String(data.get("botcheck") || "")) {
      setIsError(false);
      setStatus("Thank you! Your message has been sent successfully.");
      form.reset();
      return;
    }

    setIsSending(true);
    setIsError(false);
    setStatus("Sending your inquiry to our manufacturing desk...");

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const inquiryType = String(data.get("inquiryType") || "General Wholesale").trim();
    const message = String(data.get("message") || "").trim();

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `${defaultSubject} - ${inquiryType} (${name})`,
      from_name: "National Enterprises Portal",
      name: name,
      email: email,
      phone: phone,
      inquiry_type: inquiryType,
      message: message,
      botcheck: false,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!result.success) {
        throw new Error(result.message || "Unable to send inquiry. Please retry or connect via WhatsApp.");
      }

      form.reset();
      trackMetaLead("B2B Website Enquiry Form", {
        inquiry_type: inquiryType,
      });
      setStatus("✓ Inquiry submitted successfully! Our team will contact you shortly via Call/WhatsApp.");
      if (onSuccess) onSuccess();
    } catch (error) {
      setIsError(true);
      setStatus(error instanceof Error ? error.message : "Could not send the message. Please contact via WhatsApp.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form className="ne-contact-form" onSubmit={handleSubmit}>
      <div className="ne-form-header">
        <h2>{title}</h2>
        {subtitle && <p className="ne-form-subtitle">{subtitle}</p>}
      </div>

      {status ? (
        <div className={`ne-form-status${isError ? " is-error" : " is-success"}`} role="status">
          {status}
        </div>
      ) : null}

      {/* Honeypot for bot protection */}
      <input type="checkbox" name="botcheck" className="ne-honey" tabIndex={-1} autoComplete="off" />

      <div className="ne-form-group">
        <label htmlFor={`${idPrefix}name`}>Full Name / Company Name *</label>
        <input
          id={`${idPrefix}name`}
          name="name"
          type="text"
          placeholder="e.g. Rajesh Kumar (Shree Traders)"
          required
        />
      </div>

      <div className="ne-form-row">
        <div className="ne-form-group">
          <label htmlFor={`${idPrefix}phone`}>Phone / WhatsApp Number *</label>
          <input
            id={`${idPrefix}phone`}
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            required
          />
        </div>
        <div className="ne-form-group">
          <label htmlFor={`${idPrefix}email`}>Business Email Address</label>
          <input
            id={`${idPrefix}email`}
            name="email"
            type="email"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="ne-form-group">
        <label htmlFor={`${idPrefix}type`}>Inquiry Category</label>
        <select id={`${idPrefix}type`} name="inquiryType" defaultValue="Wholesale & Dealership">
          <option value="Wholesale & Dealership">Dealership / Wholesale Supply (MX Pure)</option>
          <option value="Contract Manufacturing">Contract & Bulk Manufacturing</option>
          <option value="Plant Setup Consultancy">Formulation & Plant Setup Consultancy</option>
          <option value="Private Label">Private Label / Custom Brand Manufacturing</option>
          <option value="Raw Materials">Bulk Chemical Raw Materials</option>
          <option value="General Inquiry">Other Inquiry</option>
        </select>
      </div>

      <div className="ne-form-group">
        <label htmlFor={`${idPrefix}message`}>Your Requirement / Message *</label>
        <textarea
          id={`${idPrefix}message`}
          name="message"
          rows={4}
          defaultValue={prefillMessage}
          placeholder="Please specify estimated quantity, product types, destination city, or technical guidance required."
          required
        />
      </div>

      <button type="submit" className="ne-btn ne-btn-primary ne-btn-block" disabled={isSending}>
        {isSending ? "Submitting Inquiry..." : "Submit B2B Inquiry"}
      </button>
      <p className="ne-form-disclaimer">🔒 Your business details are kept confidential. Direct factory quotation.</p>
    </form>
  );
}
