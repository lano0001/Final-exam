import { useState } from "react";
import type { FormEvent } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState<string>("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const subscribe = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://final-exam-cwpd.onrender.com/api/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={subscribe} className="space-y-4 max-w-sm mx-auto">
      <input
        type="email"
        placeholder="Skriv din e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 border rounded w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-accent-green text-white px-4 py-2 rounded  hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Tilmelder..." : "Tilmeld"}
      </button>
      {status === "success" && (
        <p className="text-green-600">Du er nu tilmeldt!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Noget gik galt, prøv igen.</p>
      )}
    </form>
  );
}
