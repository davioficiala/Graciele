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

let produtos=[];

async function carregar(){

const snap = await getDocs(collection(db,"dados"));

snap.forEach((doc)=>{

produtos.push({
titulo: doc.id,
...doc.data()
});

});

mostrar(produtos);

}

function mostrar(lista){

const vitrine=document.getElementById("vitrine");

vitrine.innerHTML="";

lista.forEach((p)=>{

vitrine.innerHTML += `
<div>
${p.titulo}
</div>
`;

});

}

document.getElementById("buscador")
.addEventListener("input",(e)=>{

const valor=e.target.value.toLowerCase();

const resultado=produtos.filter(p=>
p.titulo.toLowerCase().includes(valor)
);

mostrar(resultado);

});

carregar();
