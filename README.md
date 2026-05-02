# Espetinho — Cardápio Digital 🔥

Site de cardápio digital, pronto para hospedar no **GitHub Pages**, **Netlify** ou qualquer servidor estático.

---

## 📁 Estrutura do projeto

```
cardapio/
├── index.html            ← página principal
├── assets/
│   ├── css/
│   │   └── style.css     ← todos os estilos
│   ├── js/
│   │   └── script.js     ← navegação e interações
│   └── img/              ← coloque fotos dos pratos aqui
└── README.md
```

---

## ✏️ Como editar o cardápio

### Alterar preço de um item
Abra `index.html` e procure o nome do item. O preço fica logo ao lado:

```html
<div class="menu-card">
  <span class="item-name">Carne</span>
  <span class="price-badge">$4.000</span>  <!-- ← mude aqui -->
</div>
```

### Adicionar um novo item
Copie um bloco `menu-card` e cole dentro do `<div class="menu-list">` da seção:

```html
<div class="menu-card">
  <span class="item-name">Nome do item</span>
  <span class="price-badge">$X.000</span>
</div>
```

### Adicionar uma nova seção
1. Copie um bloco `<section class="menu-section" id="...">` completo
2. Dê um `id` único (ex: `id="sobremesas"`)
3. Adicione o botão na nav: `<button class="cat-pill" data-target="sobremesas">Sobremesas</button>`

### Alterar dados de contato
No `index.html`, procure os comentários `✏️ EDITE:` — eles indicam exatamente onde mudar endereço, Instagram e número do WhatsApp.

---

## 🎨 Como mudar as cores

Abra `assets/css/style.css` e edite as variáveis no topo do arquivo (seção `:root`):

```css
:root {
  --amber:       #f0900a;  /* cor principal de destaque */
  --bg-base:     #0e0c08;  /* fundo da página           */
  --cream:       #f5f0e8;  /* cor do texto              */
}
```

---

## 🚀 Como publicar

### GitHub Pages
1. Suba a pasta no GitHub
2. Vá em **Settings → Pages → Source: main branch / root**
3. Acesse `https://seu-usuario.github.io/nome-do-repo`

### Netlify
1. Arraste a pasta para [netlify.com/drop](https://netlify.com/drop)
2. Pronto — o site já está no ar!

---

## 📷 Adicionar fotos dos pratos

1. Coloque as imagens na pasta `assets/img/`
2. No card do item, adicione a tag de imagem:

```html
<div class="menu-card">
  <img src="assets/img/carne.jpg" alt="Brochette de carne" width="64" height="64"
       style="border-radius: 8px; object-fit: cover; flex-shrink: 0;">
  <span class="item-name">Carne</span>
  <span class="price-badge">$4.000</span>
</div>
```
