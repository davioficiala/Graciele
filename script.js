
// Importa Firebase
import { initializeApp } from "[gstatic.com](https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js)";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "[gstatic.com](https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js)";

// CONFIG FIREBASE
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const listaProdutos = document.getElementById("lista-produtos");
const itensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinho = document.getElementById("total-carrinho");
const finalizarBtn = document.getElementById("finalizar-btn");

let carrinho = [];

// Carregar produtos do Firebase
async function carregarProdutos() {
  listaProdutos.innerHTML = "<p>Carregando produtos...</p>";

  try {
    const querySnapshot = await getDocs(collection(db, "produtos"));
    listaProdutos.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const produto = { id: doc.id, ...doc.data() };

      const card = document.createElement("div");
      card.classList.add("card-produto");

      card.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="info-produto">
          <h3>${produto.nome}</h3>
          <p>${produto.descricao}</p>
          <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
          <button class="btn-comprar">Adicionar ao carrinho</button>
        </div>
      `;

      const botao = card.querySelector(".btn-comprar");
      botao.addEventListener("click", () => adicionarAoCarrinho(produto));

      listaProdutos.appendChild(card);
    });
  } catch (error) {
    listaProdutos.innerHTML = "<p>Erro ao carregar produtos.</p>";
    console.error("Erro:", error);
  }
}

function adicionarAoCarrinho(produto) {
  carrinho.push(produto);
  renderizarCarrinho();
}

function renderizarCarrinho() {
  itensCarrinho.innerHTML = "";
  let total = 0;

  carrinho.forEach((item, index) => {
    total += item.preco;

    const div = document.createElement("div");
    div.classList.add("item-carrinho");
    div.innerHTML = `
      <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
      <button onclick="removerDoCarrinho(${index})">Remover</button>
    `;
    itensCarrinho.appendChild(div);
  });

  totalCarrinho.textContent = total.toFixed(2);
}

window.removerDoCarrinho = function(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
};

finalizarBtn.addEventListener("click", async () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho esta vazio.");
    return;
  }

  try {
    await addDoc(collection(db, "pedidos"), {
      itens: carrinho,
      criadoEm: new Date(),
      total: carrinho.reduce((soma, item) => soma + item.preco, 0)
    });

    alert("Pedido realizado com sucesso!");
    carrinho = [];
    renderizarCarrinho();
  } catch (error) {
    console.error("Erro ao finalizar pedido:", error);
    alert("Erro ao finalizar pedido.");
  }
});

carregarProdutos();
