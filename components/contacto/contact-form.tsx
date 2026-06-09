"use client"

import { useActionState, useEffect } from "react"
import { toast } from "sonner"
import { sendContactEmail, type ContactState } from "@/app/contacto/actions"
import { cn } from "@/lib/utils"

const TIPOS = [
  { value: "capital", label: "Quiero invertir capital" },
  { value: "obras", label: "Necesito una obra" },
  { value: "constech", label: "Quiero usar Constech" },
  { value: "perforaciones", label: "Consulta de perforaciones" },
  { value: "general", label: "Otra consulta" },
]

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-[#0A0F18] border border-[#1E2E48] text-[#EDF2F7] text-sm placeholder:text-[#455570] focus:outline-none focus:border-[#E86A1A] transition-colors duration-200"

export function ContactForm({ defaultTipo }: { defaultTipo?: string }) {
  const [state, action, isPending] = useActionState<ContactState, FormData>(
    sendContactEmail,
    null
  )

  useEffect(() => {
    if (!state) return
    if (state.success) {
      toast.success("¡Mensaje enviado! Te respondemos en menos de 24hs.")
    } else if (state.error) {
      toast.error(state.error)
    }
  }, [state])

  return (
    <form action={action} className="space-y-5">
      {/* Nombre + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono text-[#455570] mb-2 tracking-wider">
            NOMBRE *
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-mono text-[#455570] mb-2 tracking-wider">
            EMAIL *
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="tu@empresa.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Empresa */}
      <div>
        <label className="block text-xs font-mono text-[#455570] mb-2 tracking-wider">
          EMPRESA / ORGANIZACIÓN
        </label>
        <input
          name="company"
          type="text"
          placeholder="Opcional"
          className={inputClass}
        />
      </div>

      {/* Tipo */}
      <div>
        <label className="block text-xs font-mono text-[#455570] mb-2 tracking-wider">
          TIPO DE CONSULTA *
        </label>
        <select
          name="tipo"
          defaultValue={defaultTipo ?? "general"}
          className={cn(inputClass, "cursor-pointer")}
        >
          {TIPOS.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-xs font-mono text-[#455570] mb-2 tracking-wider">
          MENSAJE *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Contanos en qué podemos ayudarte..."
          className={cn(inputClass, "resize-none leading-relaxed")}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isPending}
        className={cn(
          "w-full py-4 px-8 rounded-xl text-sm font-bold tracking-wider transition-all duration-300",
          isPending
            ? "opacity-50 cursor-not-allowed bg-[#1E2E48] text-[#455570]"
            : "bg-[#E86A1A] text-[#070A0F] hover:opacity-90 hover:scale-[1.01]"
        )}
      >
        {isPending ? "Enviando..." : "Enviar mensaje →"}
      </button>

      {state?.success && (
        <p className="text-center text-sm text-[#00C4A7]">
          ✓ Mensaje recibido. Te respondemos pronto.
        </p>
      )}
    </form>
  )
}
