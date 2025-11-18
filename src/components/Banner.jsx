export default function Banner() {
  return (
    <section style={styles.banner}>
      <div style={styles.content}>
        <h2 style={styles.title}>Mythara RPG</h2>
        <p style={styles.subtitle}>Meu trabalho mais recente! Usado para anunciar a edição de horror do sistema de RPG</p>
      </div>
    </section>
  );
}

const styles = {
  banner: {
    background: "linear-gradient(135deg, #9B60D2, #F1C40F)", // Gradiente roxo e amarelo
    backgroundImage: "url(/Papo.png)",
    minHeight: "350px",
    backgroundSize: "cover",
    color: "white",
    padding: "80px 20px",
    textAlign: "center",
    borderBottom: "5px solid #F1C40F", // Adicionando um detalhe de borda amarela para dar mais destaque
  },
  content: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "38px", // Tamanho maior para destacar mais
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#F1C40F", // Amarelo vibrante para o título, chamando atenção
    fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", // Fonte arredondada e moderna
  },
  subtitle: {
    fontSize: "22px", // Um pouco maior para maior legibilidade
    marginTop:"30%",
    marginBottom: "30px",
    color: "#F3F3F3", // Cor mais suave para o subtítulo, contrastando com o título
  },
  button: {
    padding: "12px 30px",
    backgroundColor: "#F1C40F", // Botão amarelo
    color: "white",
    border: "none",
    borderRadius: "25px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.3s", // Transição suave de cor e aumento do botão
  },
  buttonHover: {
    backgroundColor: "#9B60D2", // Alteração para roxo intenso no hover
    transform: "scale(1.05)", // Aumento do botão no hover
  }
};

// Para adicionar o efeito de hover, você pode incluir uma lógica JS ou usar uma classe CSS global.
