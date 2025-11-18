import Banner from "./Banner";
import Card from "./Card";

export default function Home() {
  return (
    <main>

      <div className="cards-container" id="Trabalhos">
        <Card
          title="Fabricação de símbolos"
          text="Desenvolvimento de um símbolo exclusivo, representando a essência e a história do cliente, com o objetivo de criar uma identidade visual memorável e facilmente reconhecível."
          image="/caos.png"
        />
        <Card
          title="Post de divulgação"
          text="Criação de um post para o TikTok destacando os valores dos serviços de tarô, com foco em atrair a atenção do público-alvo e integrar o símbolo e o nome do serviço de maneira impactante."
          image="/Oracule.png"
        />
        <Card
          title="Capa de livro de história"
          text="Design de capa para um livro que narra o folclore de um mundo fictício, com a proposta de transmitir a atmosfera única do conteúdo e despertar a curiosidade do leitor."
          image="/contos.png"
        />
        <Card
          title="Capa de livro de RPG"
          text="Criação de uma capa visualmente atraente e temática, projetada para refletir a essência do RPG e cativar o público interessado em aventuras e mundos imaginários."
          image="/Livro.png"
        />

      </div>
    </main>
  );
}
