
<div id="galeria"></div>

<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAE2VcJyqu01rtqlgVoMg634FFfTGxiRgc",
  authDomain: "brain-orcamento.firebaseapp.com",
  projectId: "brain-orcamento",
  storageBucket: "brain-orcamento.firebasestorage.app",
  messagingSenderId: "991853359315",
  appId: "1:991853359315:web:b2270aab447a853b212426"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function carregar() {
  const snap = await getDocs(collection(db, "dados"));

  const galeria = document.getElementById("galeria");

  snap.forEach((doc) => {
    const data = doc.data();

    const img = document.createElement("img");
    img.src = data.imagem;

    img.style.width = "150px";
    img.style.margin = "5px";
    img.style.borderRadius = "10px";

    galeria.appendChild(img);
  });
}

carregar();
</script>
