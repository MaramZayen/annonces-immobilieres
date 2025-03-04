import { route, index } from "@react-router/dev/routes";

export default [
  // Route pour la page d'accueil
  index("routes/home.tsx"),

  // Route pour la page Logement
  route("/logement", "components/Logement.tsx"),

  route("/Etape1", "components/Etape1.tsx"),
];