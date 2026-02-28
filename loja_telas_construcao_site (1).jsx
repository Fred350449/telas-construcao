export default function LojaTelas() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">TELAS CONSTRUÇÃO</h1>
          <button className="bg-white text-blue-700 px-6 py-2 rounded-2xl font-semibold shadow-md hover:scale-105 transition">
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">Fabricante de Telas para Construção Civil</h2>
          <p className="text-lg mb-6">
            Produzimos telas fachada e telas sinaleiras com alta resistência, qualidade garantida e preços direto da fábrica.
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg shadow-lg hover:scale-105 transition">
            Falar no WhatsApp
          </button>
        </div>
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
          <p className="text-xl font-semibold">Atendemos:</p>
          <ul className="mt-4 space-y-2 text-lg">
            <li>✔ Construtoras</li>
            <li>✔ Depósitos de Material</li>
            <li>✔ Empreiteiras</li>
            <li>✔ Revendedores</li>
          </ul>
        </div>
      </section>

      {/* Produtos */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Tela Fachada */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Tela Fachada para Prédio</h3>
              <p className="mb-4">Ideal para proteção e segurança em obras.</p>
              <p className="text-xl font-semibold mb-4">R$ 1,50 por m²</p>
              <ul className="space-y-2">
                <li>• 3m x 50m = 150m² (R$ 225,00)</li>
                <li>• 3m x 100m = 300m² (R$ 450,00)</li>
                <li>• Cor padrão: Branco</li>
                <li>• Outras cores: mínimo 100 rolos</li>
              </ul>
            </div>

            {/* Tela Sinaleira */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Tela Sinaleira</h3>
              <p className="mb-4">Ideal para sinalização e isolamento de áreas.</p>
              <p className="text-xl font-semibold mb-4">R$ 65,00 o rolo</p>
              <ul className="space-y-2">
                <li>• 1,20m x 50m</li>
                <li>• 60m² por rolo</li>
                <li>• Cores padrão: Laranja e Branco</li>
                <li>• Outras cores: mínimo 100 rolos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Solicite um Orçamento</h2>
          <p className="mb-6 text-lg">Entre em contato para pedidos, grandes quantidades ou cores personalizadas.</p>
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <p className="text-lg">WhatsApp: (INSERIR NÚMERO)</p>
            <p className="text-lg">Email: (INSERIR EMAIL)</p>
            <p className="text-lg">Cidade/Estado: (INSERIR LOCALIZAÇÃO)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-6 text-center">
        <p>© 2026 Telas Construção - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
