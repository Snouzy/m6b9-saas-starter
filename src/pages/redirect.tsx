import { GetServerSideProps } from "next";

// Cette page ne sera jamais rendue côté client car elle redirige côté serveur
export default function Redirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  // URL de redirection extraite des en-têtes de réponse
  const redirectUrl = "https://www.jumpr.click/8kvbcf";

  return {
    redirect: {
      destination: redirectUrl,
      permanent: false, // Utilise un code HTTP 307 (redirection temporaire)
    },
  };
};
