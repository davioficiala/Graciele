const firebaseConfig = {
apiKey: "AIzaSyAE2VcJyqu01rtqlgVoMg634FFfTGxiRgc",
authDomain: "brain-orcamento.firebaseapp.com",
projectId: "brain-orcamento",
storageBucket: "brain-orcamento.appspot.com",
messagingSenderId: "991853359315",
appId: "1:991853359315:web:b2270aab447a853b212426"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

/* MENU */
function openMenu(){
menu.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

/* MODAL */
function openModal(tipo){

if(tipo==="usuario") modalUsuario.classList.add("active");
if(tipo==="lojista") modalLojista.classList.add("active");
}

/* USUÁRIO */
function salvarUsuario(){

db.collection("usuarios").add({
nome:u_nome.value,
email:u_email.value,
telefone:u_tel.value
});

alert("Usuário salvo!");
}

/* LOJISTA */
function salvarLojista(){

db.collection("lojistas").add({
nome:l_nome.value,
empresa:l_empresa.value,
telefone:l_tel.value
});

alert("Lojista salvo!");
carregarLojistas();
}

/* CARREGAR LOJISTAS */
function carregarLojistas(){

db.collection("lojistas").get().then(snap=>{

const select = document.getElementById("p_loja");
select.innerHTML = "";

snap.forEach(doc=>{
let o = document.createElement("option");
o.value = doc.id;
o.text = doc.data().empresa;
select.appendChild(o);
});

});
}

/* PRODUTO */
function abrirProduto(){
modalProduto.classList.add("active");
carregarLojistas();
}

function salvarProduto(){

db.collection("produtos").add({
lojista:p_loja.value,
nome:p_nome.value,
preco:p_preco.value
});

alert("Produto salvo!");
}
