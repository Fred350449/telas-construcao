import Image from "next/image";

export default function Page() {
  const whatsappNumber = "5532999364422";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Inova Têxtil e gostaria de fazer um orçamento."
  )}`;

  return (
    <main style={{ fontFamily: "Arial, sans-serif", background: "#f8f9fc" }}>
      
      {/* HEADER */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "white",
        borderBottom: "1px solid #ddd"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <Image src="/4.JPG" alt="Logo Inova" width={60} height={60} />
          <div>
            <h2 style={{ margin: 0 }}>INOVA TÊXTIL</h2>
            <small>Vassouras – RJ</small>
          </div>
        </div>

        <a href={whatsappLink} target="_blank" style={{
          background: "#0b5cff",
          color: "white",
          padding: "10px 18px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Orçamento no WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section style={{ padding: 50 }}>
        <h1 style={{ fontSize: 36 }}>
          Telas para Construção Civil com produção contínua e qualidade.
        </h1>
        <p>
          Trabalhamos com <b>Tela Fachada</b> e <b>Tela Sinaleira</b>.
          Também produzimos outras cores conforme amostra (mínimo 100 rolos).
        </p>
      </section>

      {/* PRODUTOS */}
      <section style={{ padding: 40 }}>
        <h2>Produtos e Preços</h2>

        <div style={{ display: "flex", gap: 30, flexWrap: "wrap" }}>
          
          {/* FACHADA */}
          <div style={{
            background: "white",
            padding: 20,
            borderRadius: 10,
            width: 400
          }}>
            <h3>Tela Fachada</h3>
            <p><b>R$ 1,50 / m²</b></p>
            <p>3m x 50m = 150m²</p>
            <p>3m x 100m = 300m²</p>

            <p><b>Cor padrão:</b> Branco</p>
            <p>Outras cores conforme amostra (mínimo 100 rolos).</p>
            <p>Se tivermos em estoque atendemos qualquer quantidade.</p>
          </div>

          {/* SINALEIRA */}
          <div style={{
            background: "white",
            padding: 20,
            borderRadius: 10,
            width: 400
          }}>
            <h3>Tela Sinaleira</h3>
            <p><b>R$ 65,00 / rolo</b></p>
            <p>1,2m x 50m = 60m²</p>

            <p><b>Cor padrão:</b> Laranja e branco</p>
            <p>Outras cores conforme amostra (mínimo 100 rolos por cor).</p>
            <p>Se tivermos em estoque atendemos qualquer quantidade.</p>
          </div>

        </div>
      </section>

      {/* FOTOS */}
      <section style={{ padding: 40 }}>
        <h2>Fotos da Produção</h2>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Image src="/1.JPG" alt="Foto azul" width={400} height={300} />
          <Image src="/2.JPG" alt="Foto laranja" width={400} height={300} />
          <Image src="/3.JPG" alt="Foto branca" width={400} height={300} />
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "white",
        padding: 30,
        textAlign: "center",
        marginTop: 40
      }}>
        <p>INOVA TÊXTIL - Vassouras RJ</p>
        <p>WhatsApp: +55 32 99936-4422</p>
      </footer>

      {/* BOTÃO FIXO WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "#25D366",
          color: "white",
          padding: "14px 18px",
          borderRadius: 50,
          fontWeight: "bold",
          textDecoration: "none"
        }}
      >
        WhatsApp
      </a>

    </main>
  );
}
