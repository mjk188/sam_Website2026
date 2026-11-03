import { useEffect, useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Arrow from "../components/Arrow";
import { EMAIL, SOCIALS, WEB3FORMS_KEY, mailto } from "../data/site";

const label = "font-mono text-[12px] uppercase tracking-[0.18em] md:text-[13px]";
const input =
  "mt-1 w-full border border-line bg-white px-3 py-2 text-[17px] text-ink outline-none transition-colors focus:border-teal md:mt-2 md:px-4 md:py-3 md:text-base";

// Spam guards: people take more than a few seconds to write a message, rarely paste several links,
// and don't send twice a minute. The hidden "botcheck" field is only ever filled in by bots.
const MIN_FILL_MS = 3000;
const MAX_LINKS = 2;
const RESEND_MS = 60_000;
const LAST_SENT_KEY = "sam:lastContactSent";
const LIMITS = { name: 80, email: 120, message: 2000 };

const lastSent = () => {
  try {
    return Number(localStorage.getItem(LAST_SENT_KEY)) || 0;
  } catch {
    return 0;
  }
};
const markSent = () => {
  try {
    localStorage.setItem(LAST_SENT_KEY, String(Date.now()));
  } catch {
    /* storage unavailable: the rate limit simply doesn't apply */
  }
};

export default function Contact() {
  // Walk pages link here with ?about=<walk title>, which starts the message for the visitor.
  const [params] = useSearchParams();
  const about = params.get("about")?.slice(0, 120);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: about ? `I'm interested in ${about}. ` : "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "wait" | "links">("idle");
  const [botcheck, setBotcheck] = useState(false);
  const openedAt = useRef(0);
  useEffect(() => {
    openedAt.current = Date.now();
  }, []);

  // Sends through Web3Forms straight to the inbox; without a key, hands the message to the visitor's mail client.
  const submit = async (e: FormEvent) => {
    e.preventDefault();
    // Bots: pretend it worked so they don't retry.
    if (botcheck || Date.now() - openedAt.current < MIN_FILL_MS) {
      setStatus("sent");
      return;
    }
    if ((form.message.match(/https?:\/\/|www\./gi) ?? []).length > MAX_LINKS) {
      setStatus("links");
      return;
    }
    if (Date.now() - lastSent() < RESEND_MS) {
      setStatus("wait");
      return;
    }
    if (!WEB3FORMS_KEY) {
      window.location.href = mailto(
        `Message from ${form.name}`,
        `${form.message}\n\n— ${form.name} (${form.email})`,
      );
      return;
    }
    setStatus("sending");
    try {
      // Plain form data (not JSON) keeps this a simple request, so the browser sends it without a CORS preflight.
      const body = new FormData();
      body.append("access_key", WEB3FORMS_KEY);
      body.append("subject", `Website message from ${form.name}`);
      body.append("from_name", "Sam website");
      body.append("replyto", form.email);
      Object.entries(form).forEach(([k, v]) => body.append(k, v));
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      markSent();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section>
        <div className="container-site grid gap-6 md:gap-8 pt-6 pb-6 md:pt-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">Contact Us</p>
            <h1 className="display mt-4 text-4xl leading-[1.08] md:text-[48px]">
              Conversations are the key for <span className="accent text-teal">Conservation.</span>
            </h1>
          </div>
          <p className="font-serif text-lg leading-[1.5] text-moss md:text-[20px] lg:col-span-5 lg:pb-1">
            Whether you'd like to attend a walk, propose a collaboration, sponsor a programme or simply say hello,{" "}
            <span className="italic text-teal">we'd love to hear from you.</span>
          </p>
        </div>
      </section>

      <section>
        <div className="container-site pb-8 md:pb-12">
          <div className="grid gap-7 md:gap-10 border-t border-line pt-6 md:pt-8 lg:grid-cols-12">
          <div className="grid grid-cols-[auto_1fr] content-start gap-x-14 gap-y-4 lg:col-span-5">
            <div className="col-span-2">
              <p className={`${label} text-maroon`}>Email</p>
              <a href={`mailto:${EMAIL}`} className="mt-0.5 block font-serif text-[19px] leading-tight text-teal [overflow-wrap:anywhere] hover:text-maroon">
                {EMAIL}
              </a>
            </div>
            <div className="col-span-2">
              <p className={`${label} text-maroon`}>Social Media</p>
              <ul className="mt-0.5 font-serif text-[19px] leading-tight">
                {SOCIALS.map((s) => (
                  <li key={s.label} className="whitespace-nowrap">
                    <a href={s.href} target="_blank" rel="noreferrer" className="group text-teal hover:text-maroon">
                      {s.label}
                      <span className="text-faint group-hover:text-maroon"> · {s.handle}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form onSubmit={submit} className="border border-line bg-mist p-4 md:p-8 lg:col-span-7">
            <p className={`${label} text-teal`}>Send a message</p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 md:mt-5 md:gap-5">
              <label className="block">
                <span className={`${label} text-muted`}>Name</span>
                <input
                  required
                  maxLength={LIMITS.name}
                  className={input}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </label>
              <label className="block">
                <span className={`${label} text-muted`}>Email</span>
                <input
                  required
                  type="email"
                  maxLength={LIMITS.email}
                  className={input}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </label>
            </div>
            <label className="mt-3 block md:mt-5">
              <span className={`${label} text-muted`}>Message</span>
              <textarea
                required
                rows={4}
                maxLength={LIMITS.message}
                className={`${input} h-[84px] resize-y md:h-auto`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </label>
            {/* Honeypot: hidden from people and screen readers, so only bots tick it. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
            />
            <button type="submit" disabled={status === "sending"} className="btn-primary mt-4 px-6 py-3 text-[16px] disabled:opacity-60 md:mt-6 md:px-8 md:py-4 md:text-base">
              {status === "sending" ? "Sending…" : "Send message"} <Arrow />
            </button>
            {status === "sent" && (
              <p className="mt-4 font-serif text-[17px] italic text-moss">Thank you, your message has been sent. We'll be in touch soon.</p>
            )}
            {status === "wait" && (
              <p className="mt-4 text-[15px] text-maroon">Your last message was just sent. Please wait a minute before sending another.</p>
            )}
            {status === "links" && (
              <p className="mt-4 text-[15px] text-maroon">Please include no more than {MAX_LINKS} links in your message.</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-[15px] text-maroon">
                Sorry, the message couldn't be sent. Please write to us at{" "}
                <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>.
              </p>
            )}
          </form>
          </div>
        </div>
      </section>
    </>
  );
}
