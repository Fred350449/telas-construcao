import Image from "next/image";

export default function Page() {
  const whatsappNumber = "5532999364422";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Inova Têxtil e gostaria de fazer um orçamento."
  )}`;

  return (
    <main style={styles.page}>
      {/* Top bar */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <div style={styles.logoWrap}>
              <Image
                src="/logo-inova.jpg"
                alt="Inova Têxtil"
                width={56}
                height={56}
                style={{ borderRadius: 12, objectFit: "cover" }}
                priority
              />
            </div>
            <div>
              <div style={styles.brandName}>INOVA TÊXTIL</div>
              <div style={styles.brandSub}>Vassouras • RJ — Fabricação de telas</div>
            </div>
          </div>

          <div style={styles.headerCtas}>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
              Fazer orçamento no WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.heroInner}>
          <div>
            <div style={styles.badge}>Atendimento rápido • Envio sob consulta</div>
            <h1 style={styles.h1}>
              Telas para Construção Civil com produção contínua e padrão de qualidade.
            </h1>
            <p style={styles.p}>
              Trabalhamos com <b>Tela Fachada</b> e <b>Tela Sinaleira</b>. Também produzimos em outras cores
              mediante amostra (mínimo de 100 rolos por cor).
            </p>

            <div style={styles.heroActions}>
              <a href="#produtos" style={styles.secondaryBtn}>
                Ver produtos e preços
              </a>
              <a href="#cores" style={styles.ghostBtn}>
                Regras de cores e estoque
              </a>
            </div>

            <div style={styles.quickInfo}>
              <div style={styles.quickCard}>
                <div style={styles.quickTitle}>WhatsApp</div>
                <div style={styles.quickValue}>+55 32 99936-4422</div>
              </div>
              <div style={styles.quickCard}>
                <div style={styles.quickTitle}>Cidade</div>
                <div style={styles.quickValue}>Vassouras–RJ</div>
              </div>
              <div style={styles.quickCard}>
                <div style={styles.quickTitle}>Produção</div>
                <div style={styles.quickValue}>Sob demanda / pronto estoque</div>
              </div>
            </div>
          </div>

          <div style={styles.heroMedia}>
            <div style={styles.mediaCard}>
              <Image
                src="/foto-laranja.jpg"
                alt="Telas em produção (laranja)"
                width={900}
                height={650}
                style={styles.mediaImg}
              />
              <div style={styles.mediaCaption}>
                Tela Sinaleira (laranja e branco) — outras cores sob amostra.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Produtos e preços</h2>
          <p style={styles.sectionP}>
            Valores informados conforme sua lista. Para frete, prazo e volume, chame no WhatsApp.
          </p>

          <div style={styles.grid2}>
            {/* Fachada */}
            <div style={styles.productCard}>
              <div style={styles.productHeader}>
                <h3 style={styles.h3}>Tela Fachada de Prédio</h3>
                <span style={styles.priceTag}>R$ 1,50 / m²</span>
              </div>

              <ul style={styles.list}>
                <li>
                  <b>Medida:</b> 3m (larg) x 50m (comp) = <b>150 m²</b>
                </li>
                <li>
                  <b>Medida:</b> 3m (larg) x 100m (comp) = <b>300 m²</b>
                </li>
              </ul>

              <div style={styles.noteBox}>
                <b>Cor padrão:</b> branco. <br />
                <b>Outras cores:</b> podemos fazer conforme amostra (<b>mínimo 100 rolos</b>). <br />
                <b>Estoque:</b> se tivermos em estoque, atendemos qualquer quantidade.
              </div>
            </div>

            {/* Sinaleira */}
            <div style={styles.productCard}>
              <div style={styles.productHeader}>
                <h3 style={styles.h3}>Tela Sinaleira</h3>
                <span style={styles.priceTag}>R$ 65,00 / rolo</span>
              </div>

              <ul style={styles.list}>
                <li>
                  <b>Medida:</b> 1,2m x 50m = <b>60 m²</b>
                </li>
                <li>
                  <b>Cor padrão:</b> laranja e branco
                </li>
              </ul>

              <div style={styles.noteBox}>
                <b>Outras cores:</b> fazemos conforme amostra (<b>mínimo 100 rolos por cor</b>). <br />
                <b>Estoque:</b> se tivermos em estoque, atendemos qualquer quantidade.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cores / estoque */}
      <section id="cores" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Cores, personalização e estoque</h2>

          <div style={styles.grid2}>
            <div style={styles.infoCard}>
              <h3 style={styles.h3}>Personalização de cores</h3>
              <p style={styles.p}>
                • Tela Sinaleira: padrão <b>laranja e branco</b>, mas podemos produzir outra cor conforme amostra.
                <br />• Tela Fachada: padrão <b>branco</b>, mas também fazemos outra cor conforme amostra.
              </p>
              <div style={styles.highlight}>
                <b>Mínimo para cor diferente:</b> 100 rolos por cor (conforme sua regra).
              </div>
            </div>

            <div style={styles.infoCard}>
              <h3 style={styles.h3}>Atendimento por estoque</h3>
              <p style={styles.p}>
                Se tivermos o produto em estoque, conseguimos atender <b>qualquer quantidade</b>.
                Para confirmar disponibilidade e prazo, chame no WhatsApp.
              </p>
              <a href={whatsappLink} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
                Confirmar estoque no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Fotos</h2>
          <p style={styles.sectionP}>Alguns registros de produção e embalagem.</p>

          <div style={styles.gallery}>
            <div style={styles.galleryItem}>
              <Image
                src="/foto-azul.jpg"
                alt="Telas embaladas (azul)"
                width={900}
                height={700}
                style={styles.galleryImg}
              />
              <div style={styles.galleryCap}>Telas embaladas — padrão de proteção no transporte.</div>
            </div>

            <div style={styles.galleryItem}>
              <Image
                src="/foto-branca.jpg"
                alt="Telas embaladas (branco)"
                width={900}
                height={700}
                style={styles.galleryImg}
              />
              <div style={styles.galleryCap}>Pronto para carregamento e expedição.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer style={styles.footer}>
        <div style={styles.containerFooter}>
          <div>
            <div style={styles.footerTitle}>INOVA TÊXTIL</div>
            <div style={styles.footerText}>Vassouras–RJ</div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={styles.footerText}>WhatsApp: +55 32 99936-4422</div>
            <a href={whatsappLink} target="_blank" rel="noreferrer" style={styles.footerLink}>
              Falar agora no WhatsApp →
            </a>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        style={styles.whatsFloat}
        aria-label="Falar no WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}

const styles: Record<string, any> = {
  page: {
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
    color: "#0b1220",
    background: "linear-gradient(180deg, #f6f8ff 0%, #ffffff 45%, #ffffff 100%)",
    minHeight: "100vh",
  },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(15,23,42,0.08)",
  },
  headerInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logoWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(2,6,23,0.08)",
    border: "1px solid rgba(15,23,42,0.08)",
    background: "#fff",
  },
  brandName: { fontWeight: 900, letterSpacing: 0.6 },
  brandSub: { fontSize: 13, color: "rgba(2,6,23,0.65)" },

  headerCtas: { display: "flex", gap: 10, alignItems: "center" },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    background: "#0b5cff",
    color: "white",
    textDecoration: "none",
    fontWeight: 800,
    boxShadow: "0 14px 30px rgba(11,92,255,0.25)",
    border: "1px solid rgba(11,92,255,0.2)",
    whiteSpace: "nowrap",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    background: "white",
    color: "#0b1220",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(15,23,42,0.14)",
  },
  ghostBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 14,
    background: "transparent",
    color: "#0b1220",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px dashed rgba(15,23,42,0.22)",
  },

  hero: { padding: "34px 0 10px" },
  heroInner: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 18px",
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 22,
    alignItems: "center",
  },
  badge: {
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: 999,
    background: "rgba(11,92,255,0.10)",
    border: "1px solid rgba(11,92,255,0.18)",
    fontWeight: 800,
    color: "#0b2f8a",
    fontSize: 12,
    marginBottom: 10,
  },
  h1: { fontSize: 42, lineHeight: 1.05, margin: "6px 0 10px", letterSpacing: -0.8 },
  p: { fontSize: 16, lineHeight: 1.6, margin: 0, color: "rgba(2,6,23,0.75)" },
  heroActions: { display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" },

  quickInfo: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 16 },
  quickCard: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 16,
    padding: 12,
    boxShadow: "0 16px 30px rgba(2,6,23,0.06)",
  },
  quickTitle: { fontSize: 12, fontWeight: 800, color: "rgba(2,6,23,0.55)" },
  quickValue: { fontSize: 14, fontWeight: 900, marginTop: 4 },

  heroMedia: {},
  mediaCard: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 22,
    overflow: "hidden",
    boxShadow: "0 18px 40px rgba(2,6,23,0.08)",
  },
  mediaImg: { width: "100%", height: "auto", display: "block" },
  mediaCaption: { padding: "10px 12px", fontSize: 13, color: "rgba(2,6,23,0.7)" },

  section: { padding: "34px 0" },
  sectionAlt: { padding: "34px 0", background: "linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%)" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 18px" },
  h2: { fontSize: 28, margin: "0 0 6px", letterSpacing: -0.3 },
  sectionP: { margin: "0 0 18px", color: "rgba(2,6,23,0.7)", lineHeight: 1.6 },

  grid2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 14,
  },

  productCard: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 22,
    padding: 16,
    boxShadow: "0 16px 30px rgba(2,6,23,0.06)",
  },
  productHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 },
  h3: { fontSize: 18, margin: 0 },
  priceTag: {
    fontWeight: 900,
    background: "rgba(11,92,255,0.10)",
    border: "1px solid rgba(11,92,255,0.18)",
    color: "#0b2f8a",
    padding: "6px 10px",
    borderRadius: 999,
    whiteSpace: "nowrap",
  },
  list: { margin: "12px 0 10px", paddingLeft: 18, color: "rgba(2,6,23,0.75)", lineHeight: 1.7 },
  noteBox: {
    marginTop: 10,
    background: "rgba(2,6,23,0.03)",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 16,
    padding: 12,
    color: "rgba(2,6,23,0.75)",
    lineHeight: 1.6,
  },

  infoCard: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 22,
    padding: 16,
    boxShadow: "0 16px 30px rgba(2,6,23,0.06)",
  },
  highlight: {
    marginTop: 10,
    padding: 12,
    borderRadius: 16,
    background: "rgba(255, 187, 0, 0.12)",
    border: "1px solid rgba(255, 187, 0, 0.25)",
    fontWeight: 800,
    color: "rgba(2,6,23,0.78)",
  },

  gallery: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14 },
  galleryItem: {
    background: "white",
    border: "1px solid rgba(15,23,42,0.10)",
    borderRadius: 22,
    overflow: "hidden",
    boxShadow: "0 16px 30px rgba(2,6,23,0.06)",
  },
  galleryImg: { width: "100%", height: "auto", display: "block" },
  galleryCap: { padding: "10px 12px", fontSize: 13, color: "rgba(2,6,23,0.7)" },

  footer: {
    padding: "22px 0",
    borderTop: "1px solid rgba(15,23,42,0.10)",
    background: "#0b1220",
    color: "rgba(255,255,255,0.85)",
  },
  containerFooter: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  footerTitle: { fontWeight: 900, letterSpacing: 0.6 },
  footerText: { fontSize: 13, color: "rgba(255,255,255,0.75)" },
  footerLink: { display: "inline-block", marginTop: 6, color: "white", textDecoration: "none", fontWeight: 900 },

  whatsFloat: {
    position: "fixed",
    right: 18,
    bottom: 18,
    background: "#25D366",
    color: "white",
    textDecoration: "none",
    fontWeight: 900,
    padding: "12px 14px",
    borderRadius: 999,
    boxShadow: "0 18px 45px rgba(0,0,0,0.22)",
    border: "1px solid rgba(255,255,255,0.25)",
  },
};
