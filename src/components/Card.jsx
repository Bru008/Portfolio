export default function Card({ title, text, image }) {
  return (
    <div style={styles.card2}>
      <div style={styles.card}>
        <img src={image} alt={title} style={styles.cardImage} />
        <h3 style={styles.cardTitle}>{title}</h3>
        <p style={styles.cardText}>{text}</p>

      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
    backgroundImage: "url(/Lojinha.png)",
    backgroundSize: "cover",
  },

  card2: {
    padding: "25px",
    borderRadius: "10px",
    margin: "20px",
    background: "#6216ad21",
    alignContent: "center",
  },
  cardImage: {
    width: "100%",
    borderRadius: "10px", // Bordas arredondadas na imagem
    marginBottom: "15px",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#9B60D2", // Cor roxa para o título
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "16px",
    color: "#253233ff", // Texto em tom suave de cinza
    lineHeight: "1.5",
    display: "inline",
    background: "#f3f3f3b2",  /* Gradiente roxo e amarelo */
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 90px",
    paddingBottom: "2px",
    paddingLeft: "5px",
    paddingRight: "5px",
    borderRadius: "3px",
  },

};