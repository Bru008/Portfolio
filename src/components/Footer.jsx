export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2025 Bruna Oliveira. Todos os direitos reservados.</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#e6bbf3ff",
    color: "#525252ff",
    textAlign: "center",
    padding: "20px 0",
    width: "100%",
    position: "absolute",
    boxSizing: "border-box"
  },
  text: {
    margin: 0,
    fontSize: "14px",
  }
};
