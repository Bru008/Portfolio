export default function Sobre() {
  return (
    <main style={styles.main}>
      <div style={styles.content}>
        <h1 style={styles.title}>Sobre Nós</h1>
        <p style={styles.subtitle}>Quem somos e o que fazemos</p>

        <p style={styles.text}>
          Somos uma empresa apaixonada por tecnologia e inovação. Nossa missão é
          fornecer soluções digitais de alta qualidade para empresas que buscam
          transformar sua presença online.
        </p>

        <p style={styles.text}>
          Com um time experiente e focado em resultados, trabalhamos com uma
          abordagem estratégica e personalizada para cada cliente. Estamos sempre
          buscando as melhores práticas e as tecnologias mais modernas para garantir
          o sucesso do seu negócio.
        </p>

        <div style={styles.missionSection}>
          <h2 style={styles.missionTitle}>Nossa Missão</h2>
          <p style={styles.missionText}>
            Nossa missão é impulsionar a transformação digital de empresas por meio
            de soluções criativas e eficientes, ajudando nossos clientes a atingirem
            novos patamares de sucesso.
          </p>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    padding: "60px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  content: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    textAlign: "center",
    width: "100%",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#2c3e50",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "20px",
    color: "#7f8c8d",
    marginBottom: "30px",
  },
  text: {
    fontSize: "18px",
    color: "#636e72",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  missionSection: {
    marginTop: "40px",
    backgroundColor: "#8a34dbff",
    color: "white",
    padding: "30px",
    borderRadius: "8px",
  },
  missionTitle: {
    fontSize: "28px",
    marginBottom: "15px",
  },
  missionText: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
};
