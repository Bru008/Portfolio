export default function Technologies() {
  const technologies = [
    { name: "Canva", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/canva-icon.png" },
    { name: "HTML", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png" },
    { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" },
  ];

  return (
    <section style={styles.section} id="tecnologias">
      <h2 style={styles.title}>Tecnologias que uso</h2>
      <p style={styles.subtitle}>Ferramentas que fazem parte da minha jornada criativa ✨</p>

      <div style={styles.techList}>
        {technologies.map((tech, index) => (
          <div key={index} style={styles.techItem}>
            <div style={styles.iconWrapper}>
              <img src={tech.icon} alt={tech.name} style={styles.icon} />
            </div>
            <span style={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "70px 20px",
    backgroundColor: "#f3e8ff", // Roxo suave pastel
    borderRadius: "30px",
    margin: "60px auto",
    maxWidth: "1100px",
    boxShadow: "0 8px 20px rgba(155, 96, 210, 0.15)",
    textAlign: "center",
  },

  title: {
    fontSize: "34px",
    fontWeight: "bold",
    color: "#9B60D2",
  },

  subtitle: {
    fontSize: "18px",
    color: "#6a5d7a",
    marginBottom: "40px",
  },

  techList: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },

  techItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.3s",
  },

  iconWrapper: {
    backgroundColor: "#F1C40F", // amarelo vibrante
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
    transition: "transform 0.3s",
  },

  icon: {
    width: "60px",
  },

  techName: {
    marginTop: "12px",
    fontSize: "18px",
    color: "#7a4aa8",
    fontWeight: "600",
  },
};
