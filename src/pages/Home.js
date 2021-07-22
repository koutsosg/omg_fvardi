import React from "react";
import Table from "../components/servicesinfo";
import { Linktopage } from "../components/Linktopage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Faqs2 } from "./RetirmentsFaqs";
import { Embed } from "semantic-ui-react";
import ytcover from "../assets/eeae.jpg";
import { Helmet } from "react-helmet";
const info = {
  header: "ΥΠΗΡΕΣΙΕΣ",
};

const icons = {
  icon1: faIdCard,
  icon2: faAddressCard,

  size: "4x",
  /*   icon6: faHome,
  icon7: faGavel, */
};

const services = [
  {
    title: "ΦΥΣΙΚΑ ΠΡΟΣΩΠΑ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon1} size={icons.size} className="" />
    ),
    to: "/φυσικά-πρόσωπα",
  },
  {
    title: "ΝΟΜΙΚΑ ΠΡΟΣΩΠΑ",
    sicon: (
      <FontAwesomeIcon icon={icons.icon2} size={icons.size} className="" />
    ),
    to: "/νομικά-πρόσωπα",
  },
];
const classes = {
  container: "",
  mainheader: "gray",
  row: "",
  col: " py-5",
  link: "",
  card: "m-auto p-2 cards",
  cardcontent: "text-center m-auto",
  cardheader: "p-2 btwline",
  modalcontent: "px-5",
};

export const Home = () => {
  return (
    <>
      <div className="pb-5 text-left">
        <Helmet>
          <title>Φωτεινή Βαρδή - Ασφαλιστική Σύμβουλος</title>
          <meta
            name="description"
            content="Διακεκριμένη Ασφαλιστική Σύμβουλος στην Εθνική Ασφαλιστική. Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη εμπειρία στην αποτελεσματική διαχείριση κινδύνων"
          />
          <meta
            name="keywords"
            content="Ασφάλεια, υγεία, ασφαλιστική σύμβουλος, εθνική ασφαλιστική, οικογένια, Φωτεινή Βαρδή"
          />

          <meta property="og:url" content="https://fvardi-4u.gr" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Φωτεινή Βαρδή - Ασφαλιστική Σύμβουλος"
          />
          <meta
            property="og:description"
            content="Διακεκριμένη Ασφαλιστική Σύμβουλος στην Εθνική Ασφαλιστική. Δραστηριοποιούμαι στην εταιρία από το 2002 και διαθέτω εξειδικευμένη εμπειρία στην αποτελεσματική διαχείριση κινδύνων"
          />
          <meta
            property="og:image"
            content="https://fvardi-4u.gr/logo192.png"
          />
        </Helmet>
        <h1 className="px-5 text-center py-5 gray">
          Σε καιρούς μεγάλων αλλαγών
        </h1>
        <div className="px-5 gray">
          <p>
            ....όπου η κοινωνία και οι δομές της δοκιμάζεται από απρόβλεπτα
            φυσικά και μη γεγονότα ,κάθε πολύτιμο αγαθό για εμάς γίνεται πιο
            εύθραυστο.
          </p>
          <p>
            Η υγεία μας , η ακεραιότητα της κατοικίας μας ,η εργασία μας, οι
            οικονομίες μας, -κόποι μια ζωής- για να γίνουν αληθινά όσα
            ονειρευτήκαμε…
          </p>
          <p>
            Ζώντας μέσα στο χώρο της ασφάλισης από το 2002 ,τον αγάπησα ,έλαβα
            πολλή γνώση και εμπειρία από τους καλύτερους του είδους και σήμερα
            είμαι η ασφαλιστική σύμβουλος μεγάλου αριθμού συμπολιτών μας και
            επιχειρήσεων.
          </p>
          <p>
            Απολαμβάνω αμέριστη χαρά και ικανοποίηση από τα χαμόγελα των
            ανθρώπων που βιώνουν την υπόσχεση που δώσαμε στο συμβόλαιο τους να
            γίνεται πράξη.
          </p>
          <p>
            Με εμψυχώνουν τα καλά τους λόγια ,οι ευχές τους ,οι αναρτήσεις τους
            στα κοινωνικά δίκτυα.Ξέρουν ότι είμαι πάντα δίπλα τους, αρωγός και
            συνοδοιπόρος τους.
          </p>
          <p>
            Στην ερώτηση γιατί φτιάχνω αυτή τη σελίδα η απάντηση είναι απλή ,ο
            καλύτερος τρόπος ασφάλισης με έμπειρο προσωπικό σύμβουλο είναι τώρα
            για εσάς άμεσα προσβάσιμος,πρακτικός και απόλυτα ασφαλής.
          </p>
        </div>
      </div>
      {/*   <Linktopage info={info} services={services} classes={classes} /> */}
      <div className="p-5">
        <Embed
          autoplay={false}
          brandedUI
          color="white"
          hd={false}
          id="JqTNZ2zxu3M"
          placeholder={ytcover}
          alt="Ένωση Aσφαλιστικών Eταιριών"
          source="youtube"
        />
      </div>
      <Table />
    </>
  );
};
