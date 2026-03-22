var waNumber = '244947541761';

  function buildWaLink(nome, tel, email, msg) {
    var text = 'Olá Isaac, quero me inscrever no curso de Programação Web, gosto muito dos seus trablahos e eu ainda não sei programar e quero estilizar meu conhecimento.\n\n' +
      'Nome: ' + nome + '\n' +
      'WhatsApp: ' + tel + '\n' +
      (email ? 'E-mail: ' + email + '\n' : '') +
      (msg ? '\nMensagem: ' + msg : '');
    return 'https://wa.me/' + waNumber + '?text=' + encodeURIComponent(text);
  }

  function updateWa() {
    var n = document.getElementById('nome').value;
    var t = document.getElementById('whatsapp').value;
    var e = document.getElementById('email').value;
    var m = document.getElementById('mensagem').value;
    document.getElementById('waBtn').href = buildWaLink(n, t, e, m);
  }

  ['nome','whatsapp','email','mensagem'].forEach(function(id) {
    document.getElementById(id).addEventListener('input', updateWa);
  });
  updateWa();

  function handleSubmit(e) {
    e.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    var tel  = document.getElementById('whatsapp').value.trim();
    var email = document.getElementById('email').value.trim();
    var msg  = document.getElementById('mensagem').value.trim();
    if (!nome || !tel) return;
    window.open(buildWaLink(nome, tel, email, msg), '_blank');
    document.getElementById('regForm').style.display = 'none';
    document.getElementById('success-msg').style.display = 'block';
  }

