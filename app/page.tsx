import Image from "next/image";

export default function Page() {
  const whatsappNumber = "5532999364422";
  const whatsappText =
    "Olá! Vim pelo site da INOVA TÊXTIL e gostaria de fazer um orçamento. Pode me ajudar?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappText
  )}`;

  return (
    <main
      style={{
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial',
        background: "#ffffff",
        color: "#0f172a",
        minHeight: "100vh",
      }}
    >
      {/* TOP STRIP */}
      <div
        style={{
          background: "#0b1220",
          color: "white",
          padding: "10px 16px",
          fontSize: 14,
          textAlign: "center",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        INOVA TÊXTIL • Vassouras - RJ • WhatsApp: <b>+55 32 99936-4422</b>
      </div>

      {/* HEADER */}
      <header
        style={{
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          {/* LOGO (agora é a /1.JPG, grande, no topo à esquerda) */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 78,
                height: 78,
                borderRadius: 16,
                border: "1px solid #e5e7eb",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(2,6,23,0.06)",
              }}
            >
              <Image
                src="/1.JPG"
                alt="Logo INOVA TÊXTIL"
                width={120}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                priority
              />
            </div>

            <div>
              <div style={{ fontWeight: 950, letterSpacing: 0.4, fontSize: 18 }}>
                INOVA TÊXTIL
              </div>
              <div style={{ fontSize: 13, color: "#334155" }}>
                Vassouras - RJ • Fabricação de telas para construção civil
              </div>

              <div style={{ marginTop: 6, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span
                  style={{
                    background: "#e0ecff",
                    color: "#0b5cff",
                    padding: "6px 10px",
                    borderRadius: 999,
                    fontWeight: 900,
                    fontSize: 12,
                  }}
                >
                  Atendimento rápido
                </span>
                <span
                  style={{
                    background: "#ecfeff",
                    color: "#0f766e",
                    padding: "6px 10px",
                    borderRadius: 999,
                    fontWeight: 900,
                    fontSize: 12,
                  }}
                >
                  Envio sob consulta
                </span>
                <span
                  style={{
                    background: "#fef9c3",
                    color: "#854d0e",
                    padding: "6px 10px",
                    borderRadius: 999,
                    fontWeight: 900,
                    fontSize: 12,
                  }}
                >
                  Produção contínua
                </span>
              </div>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#0b5cff",
              color: "white",
              padding: "12px 16px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: 900,
              boxShadow: "0 12px 28px rgba(11,92,255,0.22)",
              whiteSpace: "nowrap",
            }}
          >
            Fazer orçamento no WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ padding: "28px 16px 10px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 55%, #f1f5ff 100%)",
            border: "1px solid #e5e7eb",
            borderRadius: 22,
            padding: 22,
            boxShadow: "0 12px 35px rgba(2,6,23,0.06)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 18,
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 20,
              }}
            >
              <h1 style={{ fontSize: 42, lineHeight: 1.05, margin: "0 0 12px" }}>
                Telas para Construção Civil com padrão de qualidade.
              </h1>

              <p style={{ color: "#334155", margin: 0, fontSize: 16, lineHeight: 1.6 }}>
                Fabricamos <b>Tela Fachada</b> e <b>Tela Sinaleira</b>. Trabalhamos com
                pronta entrega (quando em estoque) e produção sob demanda.
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a
                  href="#produtos"
                  style={{
                    background: "#111827",
                    color: "white",
                    padding: "12px 16px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 900,
                  }}
                >
                  Ver produtos e preços
                </a>

                <a
                  href="#regras"
                  style={{
                    background: "white",
                    color: "#111827",
                    padding: "12px 16px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 900,
                    border: "1px solid #e5e7eb",
                  }}
                >
                  Regras de cores e estoque
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                  gap: 10,
                  marginTop: 18,
                }}
              >
                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 14,
                    padding: 12,
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#475569" }}>WhatsApp</div>
                  <div style={{ fontWeight: 950 }}>+55 32 99936-4422</div>
                </div>
                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 14,
                    padding: 12,
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#475569" }}>Cidade</div>
                  <div style={{ fontWeight: 950 }}>Vassouras - RJ</div>
                </div>
                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: 14,
                    padding: 12,
                    background: "#f8fafc",
                  }}
                >
                  <div style={{ fontSize: 12, color: "#475569" }}>Atendimento</div>
                  <div style={{ fontWeight: 950 }}>Sob demanda / estoque</div>
                </div>
              </div>
            </div>

            {/* FOTOS */}
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 14,
              }}
            >
              <div style={{ fontWeight: 950, marginBottom: 10 }}>Fotos (produção real)</div>

              <Image
                src="/3.JPG"
                alt="Produção - telas"
                width={1200}
                height={700}
                style={{
                  width: "100%",
                  height: 245,
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                }}
              />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 10 }}>
                <Image
                  src="/2.JPG"
                  alt="Tela sinaleira"
                  width={900}
                  height={600}
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "1px solid #e5e7eb",
                  }}
                />
                <Image
                  src="/4.JPG"
                  alt="Telas embaladas"
                  width={900}
                  height={600}
                  style={{
                    width: "100%",
                    height: 150,
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "1px solid #e5e7eb",
                  }}
                />
              </div>

              <div style={{ fontSize: 13, color: "#475569", marginTop: 10, lineHeight: 1.5 }}>
                Produção própria • Cores sob amostra • Atendimento rápido no WhatsApp.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" style={{ padding: "26px 16px 22px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontSize: 30, margin: "0 0 8px" }}>Produtos e preços</h2>
          <p style={{ color: "#475569", marginTop: 0 }}>
            Para frete, prazo e volume, chame no WhatsApp.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {/* Fachada */}
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 18,
                boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: 18 }}>Tela Fachada de Prédio</h3>
                <span
                  style={{
                    background: "#e0ecff",
                    color: "#0b5cff",
                    padding: "7px 12px",
                    borderRadius: 999,
                    fontWeight: 950,
                    whiteSpace: "nowrap",
                  }}
                >
                  R$ 1,50 / m²
                </span>
              </div>

              <div style={{ marginTop: 12, color: "#0f172a", lineHeight: 1.6 }}>
                <div>
                  <b>Medida:</b> 3m × 50m = <b>150 m²</b>
                </div>
                <div>
                  <b>Medida:</b> 3m × 100m = <b>300 m²</b>
                </div>
              </div>

              <div
                style={{
                  marginTop: 12,
                  padding: 12,
                  background: "#f8fafc",
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                  lineHeight: 1.6,
                }}
              >
                <div>
                  <b>Cor padrão:</b> branco.
                </div>
                <div style={{ marginTop: 6 }}>
                  <b>Outras cores:</b> podemos fazer conforme amostra <b>(mínimo 100 rolos)</b>.
                </div>
                <div style={{ marginTop: 6 }}>
                  <b>Estoque:</b> se tivermos em estoque, atendemos <b>qualquer quantidade</b>.
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  background: "#111827",
                  color: "white",
                  padding: "11px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 950,
                }}
              >
                Pedir orçamento (Fachada)
              </a>
            </div>

            {/* Sinaleira */}
            <div
              style={{
                background: "white",
                border: "1px solid #e5e7eb",
                borderRadius: 18,
                padding: 18,
                boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                <h3 style={{ margin: 0, fontSize: 18 }}>Tela Sinaleira</h3>
                <span
                  style={{
                    background: "#dcfce7",
                    color: "#166534",
                    padding: "7px 12px",
                    borderRadius: 999,
                    fontWeight: 950,
                    whiteSpace: "nowrap",
                  }}
                >
                  R$ 65,00 / rolo
                </span>
              </div>

              <div style={{ marginTop: 12, color: "#0f172a", lineHeight: 1.6 }}>
                <div>
                  <b>Medida:</b> 1,2m × 50m = <b>60 m²</b>
                </div>
                <div>
                  <b>Cor padrão:</b> laranja e branco
                </div>
              </div>

              <div
                style={{
                  marginTop: 12,
                  padding: 12,
                  background: "#f8fafc",
                  borderRadius: 14,
                  border: "1px solid #e5e7eb",
                  lineHeight: 1.6,
                }}
              >
                <div>
                  <b>Outras cores:</b> fazemos conforme amostra{" "}
                  <b>(mínimo 100 rolos por cor diferente)</b>.
                </div>
                <div style={{ marginTop: 6 }}>
                  <b>Estoque:</b> se tivermos em estoque, atendemos <b>qualquer quantidade</b>.
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 14,
                  background: "#111827",
                  color: "white",
                  padding: "11px 14px",
                  borderRadius: 12,
                  textDecoration: "none",
                  fontWeight: 950,
                }}
              >
                Pedir orçamento (Sinaleira)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* REGRAS */}
      <section id="regras" style={{ padding: "0 16px 28px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "white",
            border: "1px solid #e5e7eb",
            borderRadius: 18,
            padding: 18,
            boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 22 }}>Regras de cores e estoque</h2>
          <div style={{ color: "#334155", marginTop: 10, lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}>
              ✅ <b>Tela Sinaleira</b>: fazemos normalmente <b>laranja e branco</b>, mas podemos fazer outra cor conforme amostra.{" "}
              <b>(Mínimo 100 rolos por cor diferente)</b>
            </p>
            <p style={{ margin: "10px 0 0" }}>
              ✅ <b>Tela Fachada</b>: fazemos normalmente <b>branco</b>, mas podemos fazer outra cor.{" "}
              <b>(Mínimo 100 rolos)</b>
            </p>
            <p style={{ margin: "10px 0 0" }}>
              ✅ <b>Se tivermos em estoque</b>, podemos atender <b>qualquer quantidade</b>.
            </p>
          </div>
        </div>
      </section>

      {/* COMO COMPRAR + MAPA */}
      <section style={{ padding: "0 16px 40px" }}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              padding: 18,
              boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>Como comprar / Orçamento</h2>
            <ol style={{ marginTop: 10, color: "#334155", lineHeight: 1.8 }}>
              <li>Chame no WhatsApp e diga qual produto (Fachada ou Sinaleira).</li>
              <li>Informe a quantidade e, se quiser, a cor (com amostra).</li>
              <li>Retornamos com prazo, frete e valor final.</li>
            </ol>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 10,
                background: "#25D366",
                color: "white",
                padding: "12px 16px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: 950,
                boxShadow: "0 12px 28px rgba(37, 211, 102, 0.25)",
              }}
            >
              Falar no WhatsApp agora
            </a>
          </div>

          <div
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 18,
              padding: 18,
              boxShadow: "0 10px 30px rgba(2,6,23,0.04)",
              overflow: "hidden",
            }}
          >
            <h2 style={{ margin: 0, fontSize: 22 }}>Localização</h2>
            <p style={{ marginTop: 8, color: "#475569" }}>Vassouras - RJ</p>

            <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid #e5e7eb" }}>
              <iframe
                title="Mapa Vassouras-RJ"
                src="https://www.google.com/maps?q=Vassouras%20RJ&output=embed"
                width="100%"
                height="280"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0b1220", color: "white", padding: "26px 16px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontWeight: 950, fontSize: 16 }}>INOVA TÊXTIL</div>
          <div style={{ opacity: 0.92, marginTop: 6 }}>
            Vassouras - RJ • WhatsApp: <b>+55 32 99936-4422</b>
          </div>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: 18,
          bottom: 18,
          background: "#25D366",
          color: "white",
          padding: "12px 16px",
          borderRadius: 999,
          textDecoration: "none",
          fontWeight: 950,
          boxShadow: "0 12px 30px rgba(37, 211, 102, 0.35)",
        }}
      >
        WhatsApp
      </a>

      {/* Responsivo simples */}
      <style>{`
        @media (max-width: 980px) {
          section > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
