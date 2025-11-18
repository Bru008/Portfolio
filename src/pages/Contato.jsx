export default function Contato() {
  return (
    <main style={styles.main}>
      <div style={styles.content}>
        <h1 style={styles.title}>Fale Conosco</h1>
        <p style={styles.text}>
          Preencha o formulário abaixo e retornaremos o mais rápido possível.
        </p>

        <form style={styles.form}>
          <input type="text" placeholder="Seu Nome" style={styles.input} required />
          <input type="email" placeholder="Seu Email" style={styles.input} required />
          <textarea placeholder="Sua Mensagem" style={styles.textarea} required />
          <button style={styles.button}>Enviar Mensagem</button>
        </form>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "0 20px",
  },
  content: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    textAlign: "center",
  },
  title: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  text: {
    fontSize: "18px",
    color: "#636e72",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #b2bec3",
    fontSize: "16px",
  },
  textarea: {
    padding: "12px",
    height: "130px",
    borderRadius: "8px",
    border: "1px solid #b2bec3",
    fontSize: "16px",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    backgroundColor: "#9309e3ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
  }
};
