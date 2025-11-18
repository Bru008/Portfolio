export default function AboutMe() {
  return (
    <section style={styles.aboutSection}>
      <div style={styles.aboutContent}>
        <img
          src="/perfil.png"  // Coloque o caminho da sua foto aqui
          alt="Bruna Oliveira"
          style={styles.profileImage}
        />
        <div style={styles.textContent}>
          <h2 style={styles.title}>Sobre Mim</h2>
          <p style={styles.description}>
            Olá, sou Bruna Oliveira! Publicitária e Designer com uma paixão
            por contar histórias visuais e ajudar marcas a se expressarem de
            maneira criativa e impactante. Ao longo da minha jornada, trabalhei
            com projetos que combinam criatividade, estratégia e inovação. Estou
            sempre em busca de novos desafios que me permitam crescer e aprender
            mais. Vamos criar algo incrível juntos?
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  aboutSection: {
    padding: "60px 20px",
    backgroundColor: "#F9F3FF", // Cor de fundo suave para a seção
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  aboutContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "1000px",
    gap: "40px",
  },
  profileImage: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    objectFit: "cover", // Garante que a imagem fique bem ajustada
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  textContent: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#9B60D2", // Roxo para o título
    marginBottom: "20px",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    color: "#566364ff", // Cor suave para o texto
  },
};


