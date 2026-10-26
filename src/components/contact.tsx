import { useState } from "react";
import { Terminal, Send, Info } from "lucide-react";

export default function ContactEditor() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("Portfolio enquiry");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"ready" | "copied" | "invalid">("invalid");
  const CONTACT_EMAIL = "prashantrao744@gmail.com";

  // Derive readiness from the current values so status updates while typing.
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail.trim());
  const isFormReady =
    senderName.trim().length > 0 &&
    isEmailValid &&
    subject.trim().length > 0 &&
    message.trim().length >= 20;

  const liveStatus =
    status === "copied" ? "copied" : isFormReady ? "ready" : "invalid";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !senderName.trim() ||
      !senderEmail.trim() ||
      !subject.trim() ||
      message.trim().length < 20
    ) {
      setStatus("invalid");
      return;
    }

    const body = [
      `Name: ${senderName.trim()}`,
      `Email: ${senderEmail.trim()}`,
      "",
      message.trim(),
    ].join("\n");

    // This frontend-only form opens the visitor's configured email application.
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setStatus("ready");
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setStatus("copied");
    } catch {
      window.location.href = `mailto:${CONTACT_EMAIL}`;
    }
  }

  function resetForm() {
    setSenderName("");
    setSenderEmail("");
    setSubject("Portfolio enquiry");
    setMessage("");
    setStatus("ready");
  }
  return (
    <div className="workspace-content flex px-3 bg-[#f5f5f5] dark:bg-[#1B1B1C]">
      <div className="code-gutter flex-none py-3 flex flex-col gap-1.5 pr-3 border-r border-[#333333] dark:border-[#e5e2e1]">
        {Array.from({ length: 35 }, (_, index) => (
          <span
            className="text-[0.75rem] text-[#333333] dark:text-[#8A919D]"
            key={index}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        ))}
      </div>
      <div className="flex-2 bg-[#f5f5f5] dark:bg-[#1B1B1C] px-3 py-2 font-normal text-[0.75rem]">
        {/* TypeScript source */}
        <div className="space-y-3 leading-5">
          <div className="text-[#008000] dark:text-[#8a919db2]">
            // @file contact.ts - Transmission contract for bilateral technical
            dialogues
          </div>

          <div>
            <span className="text-[#0000FF] dark:text-[#F4B1EE]">import</span>{" "}
            <span className="text-[#16825D] dark:text-[#e5e2e1]">
              {"{ NetworkHandshake, EncryptedPayload }"}
            </span>{" "}
            <span className="text-[#0000FF] dark:text-[#F4B1EE]">from</span>{" "}
            <span className="text-[#A31515] dark:text-[#9FCAFF]">
              '@sys/protocols';
            </span>
          </div>

          <div>
            <span className="text-[#0000FF] dark:text-[#9FCAFF]">
              export interface
            </span>{" "}
            <span className="text-[#16825D] dark:text-[#84CFFF]">
              MessagePayload
            </span>{" "}
            {"{"}
            <div className="pl-3 text-[#001080] dark:text-[#e5e2e1]">
              senderName:{" "}
              <span className="text-[#0000FF] dark:text-[#84CFFF]">string</span>
              ;{" "}
              <span className="text-[#16825D] dark:text-[#8a919db2]">
                // Human identifier or org title
              </span>
            </div>
            <div className="pl-3 text-[#001080] dark:text-[#e5e2e1]">
              senderEmail:{" "}
              <span className="text-[#0000FF] dark:text-[#84CFFF]">string</span>
              ;{" "}
              <span className="text-[#16825D] dark:text-[#8a919db2]">
                // RFC-5322 compliant mailbox
              </span>
            </div>
            <div className="pl-3 text-[#001080] dark:text-[#e5e2e1]">
              subject:{" "}
              <span className="text-[#A31515] dark:text-[#84CFFF]">
                'Staff Role' | 'Advisory / Consulting' | 'Architecture Review' |
                'Open Source'
              </span>
              ;
            </div>
            <div className="pl-3 text-[#001080] dark:text-[#e5e2e1]">
              message:{" "}
              <span className="text-[#0000FF] dark:text-[#84CFFF]">string</span>
              ;{" "}
              <span className="text-[#16825D] dark:text-[#8a919db2]">
                // Detailed RFC, engagement scope or prompt
              </span>
            </div>
            {"}"}
          </div>

          <div className="pt-1 text-[#16825D] dark:text-[#8a919db2]">
            // POST /api/v1/send-handshake (HTTP/3 via edge compute)
          </div>
        </div>

        {/* Contact form */}
        <div className="max-w-150 mt-1 rounded-lg border border-[#e1e4e865] bg-[#F8F9FA] dark:bg-[#1B1B1C] px-4 py-6 shadow-sm">
          <div className="mb-4 pb-2 flex flex-wrap items-center justify-between gap-2 border-b border-[#e1e4e865]">
            <div className="flex items-center gap-1.5 text-[0.75rem] font-medium text-[#24292F] dark:text-[#9FCAFF]">
              <Terminal
                size={12}
                className="text-emerald-700 dark:text-[#9FCAFF]"
              />
              <span>PayloadDispatcher.renderForm()</span>
            </div>
            <span className="rounded bg-[#ffffff] dark:bg-[#202020] border border-[#e1e4e84d] px-2 py-0.5 text-[0.75rem] text-[#767676] dark:text-[#C0C7D3]">
              <span className={`${liveStatus==='invalid'? 'text-red-600 dark:text-red-800':'text-[#16825D] dark:text-[#84CFFF]'}  `}>●</span>{" "}
              STATE: {liveStatus==='invalid'?'NOT READY':liveStatus==='copied'?'EMAIL COPIED':'READY'}
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-3 flex flex-col gap-3"
          >
            <div className="flex flex-col">
              <label
                htmlFor="senderName"
                className="text-[#616161] dark:text-[#9FCAFF] text-[0.75rem] mb-1! flex items-center justify-between"
              >
                senderName :
              </label>
              <input
                id="senderName"
                required
                value={senderName}
                onChange={(e) => { setSenderName(e.target.value); setStatus("invalid"); }}
                placeholder="e.g. Alex Morgan (Engineering Director)"
                className="inset-shadow-sm border border-[#E1E4E8] rounded-sm px-3 py-2 placeholder:text-[#76767680] dark:placeholder:text-[#929292] text-[#2a2a2a] dark:text-[#e5e2e1] bg-[#ffffff] dark:bg-[#353535]"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="senderEmail"
                className="text-[#616161] dark:text-[#9FCAFF] text-[0.75rem] mb-1! flex items-center justify-between"
              >
                senderEmail :
              </label>
              <input
                id="senderEmail"
                type="email"
                required
                value={senderEmail}
                onChange={(e) => { setSenderEmail(e.target.value); setStatus("invalid"); }}
                placeholder="alex.morgan@enterprise.tech"
                className="inset-shadow-sm border border-[#E1E4E8] rounded-sm px-3 py-2 placeholder:text-[#76767680] dark:placeholder:text-[#929292] text-[#2a2a2a] dark:text-[#e5e2e1] bg-[#ffffff] dark:bg-[#353535]"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="subject"
                className="text-[#616161] dark:text-[#9FCAFF] text-[0.75rem] mb-1! flex items-center justify-between"
              >
                subject :
              </label>
              {/* <input
                id="subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="enter subject"
                className="inset-shadow-sm border border-[#E1E4E8] rounded-sm px-3 py-2 placeholder:text-[#76767680] dark:placeholder:text-[#929292] text-[#2a2a2a] dark:text-[#e5e2e1] bg-[#ffffff] dark:bg-[#353535]"
              /> */}
              <select
                id="subject"
                name="subject"
                required
                value={subject}
                onChange={(event) => { setSubject(event.target.value); setStatus("invalid"); }}
                className="inset-shadow-sm border border-[#E1E4E8] rounded-sm px-3 py-2 placeholder:text-[#76767680] dark:placeholder:text-[#929292] text-[#2a2a2a] dark:text-[#e5e2e1] bg-[#ffffff] dark:bg-[#353535]"
              >
                <option value="Portfolio enquiry">Portfolio enquiry</option>
                <option value="Job opportunity">Job opportunity</option>
                <option value="Freelance project">Freelance project</option>
                <option value="Technical discussion">
                  Technical discussion
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-[#616161] dark:text-[#9FCAFF] text-[0.75rem] mb-1! flex items-center justify-between"
              >
                <span>message : string (min 20 chars)</span>
                <span>{message.length} / 1000</span>
              </label>
              <textarea
                id="message"
                required
                minLength={20}
                maxLength={1000}
                rows={4}
                value={message}
                onChange={(e) => { setMessage(e.target.value); setStatus("invalid"); }}
                placeholder="// Specify engagement context, timelines, tech stack, and mutual requirements..."
                className="inset-shadow-sm min-h-22.5 w-full resize-y border border-[#E1E4E8] rounded-sm px-3 py-2 placeholder:text-[#76767680] dark:placeholder:text-[#929292] text-[#2a2a2a] dark:text-[#e5e2e1] bg-[#ffffff] dark:bg-[#353535]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 border-t border-[#ececec] pt-3">
              <button
                type="submit"
                className="flex items-center gap-2 rounded bg-[#007ACC] px-3 py-2 text-[0.75rem] font-semibold text-[#ffffff] transition"
              >
                <Send size={12} />$ git push origin contact-message
              </button>

              <button
                type="button"
                onClick={resetForm}
                className="text-[0.75rem] text-[#767676] dark:text-[#C0C7D3] dark:bg-[#202020] px-3 py-2 rounded-sm"
              >
                // reset
              </button>

              <span className="ms-auto! flex items-center gap-1 text-[0.75rem] text-[#767676] dark:text-[#C0C7D3]">
                <Info size={10} className="text-blue-600 dark:text-[#84CFFF]" />
               Status: {liveStatus === "invalid" ? "NOT_READY_TO_TRANSMIT" : liveStatus === "copied" ? "EMAIL_COPIED" : "READY_TO_TRANSMIT"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
