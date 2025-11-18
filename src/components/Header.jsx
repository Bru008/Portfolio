export default function Header() {
  return (
    <header style={styles.header}>
      <img 
        src="/logo.png"
        alt="Bruna Oliveira"
        style={{ width: "23%" }}
      />
            <nav style={styles.nav}>
                <a to="/" style={styles.link}>Início</a> |
                <a href="#Trabalhos" style={styles.link}>Trabalhos</a>
                |
                <a href="#tecnologias" style={styles.link}>Tecnologias</a>
            </nav>
        </header>
    );
}

const styles = {
    header: {
        padding: "20px 40px",
        backgroundColor: "#9B60D2", // Roxo suave
        color: "#F1C40F", // Amarelo vibrante
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "100%",
        boxSizing: "border-box",
    },
    logo: {
        fontSize: "28px", // Tamanho maior para dar destaque
        fontWeight: "bold",
        letterSpacing: "2px", 
        color: "#F1C40F", // Amarelo vibrante para a logo
        fontFamily: "'Poppins', sans-serif", // Fonte mais moderna e arredondada (adicionar import no seu CSS global)
    },
    nav: {
        display: "flex",
        gap: "20px",
    },
    link: {
        color: "#F1C40F", // Amarelo vibrante
        textDecoration: "none",
        fontSize: "18px", // Tamanho aumentado para melhorar a legibilidade
        fontWeight: "600", // Deixar um pouco mais ousado
        transition: "color 0.3s, transform 0.3s", // Efeito de transição para suavizar mudanças
    },
    linkHover: {
        color: "#9B60D2", // Roxo intenso para o hover
        transform: "scale(1.1)", // Efeito de aumentar um pouco o link
    }
};

// Para aplicar o efeito de hover nos links, você pode usar o seguinte código no seu arquivo CSS global
// Ou criar uma função de hover com JavaScript caso queira mais controle.
