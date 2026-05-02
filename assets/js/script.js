/* =============================================================
   ESPETINHO — CARDÁPIO DIGITAL
   script.js
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     NAVEGAÇÃO POR CATEGORIAS
     Ao clicar em uma pill, rola suavemente até a seção
     correspondente e marca a pill como ativa.
  ---------------------------------------------------------- */
  const pills     = document.querySelectorAll('.cat-pill');
  const sections  = document.querySelectorAll('.menu-section');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Ativa a pill clicada
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      // Rola até a seção alvo
      const targetId = pill.dataset.target;
      const target   = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----------------------------------------------------------
     DESTAQUE AUTOMÁTICO NA NAVEGAÇÃO (Intersection Observer)
     Ao rolar a página, a pill da seção visível fica ativa
     automaticamente.
  ---------------------------------------------------------- */
  const navHeight = document.querySelector('.cat-nav-wrapper')?.offsetHeight || 60;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id           = entry.target.id;
          const matchingPill = document.querySelector(`.cat-pill[data-target="${id}"]`);
          if (matchingPill) {
            pills.forEach(p => p.classList.remove('active'));
            matchingPill.classList.add('active');

            // Mantém a pill ativa visível dentro da nav horizontal
            matchingPill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        }
      });
    },
    {
      rootMargin: `-${navHeight + 10}px 0px -60% 0px`,
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));

  /* ----------------------------------------------------------
     ACCORDION — SEÇÃO "COMPARTILHE O CARDÁPIO"
  ---------------------------------------------------------- */
  const shareToggle  = document.querySelector('.share-toggle');
  const shareContent = document.querySelector('.share-content');
  const shareIcon    = document.querySelector('.share-icon');

  if (shareToggle) {
    shareToggle.addEventListener('click', () => {
      shareContent?.classList.toggle('open');
      shareIcon?.classList.toggle('open');
    });
  }

  /* ----------------------------------------------------------
     SHARE API — abre o painel nativo de compartilhamento
     do dispositivo (se disponível)
  ---------------------------------------------------------- */
  const shareBtn = document.querySelector('#share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'Espetinho — Cardápio Digital',
            text:  'Confira o cardápio do Espetinho!',
            url:   window.location.href
          });
        } catch (err) {
          // Usuário cancelou o compartilhamento — sem ação
        }
      } else {
        // Fallback: copia o link para a área de transferência
        await navigator.clipboard.writeText(window.location.href);
        shareBtn.textContent = 'Link copiado!';
        setTimeout(() => { shareBtn.textContent = 'Copiar link'; }, 2000);
      }
    });
  }

});
