const db = require('../config/db')

const novoUsuario = {
  nome: 'Pedor',
  email: 'pedr@email',
  senha: '123'
}

async function exercicio() {
  const { qtde } = await db('usuarios')
    .count('* as qtde').first()

  if (qtde === 0) {
    await db('usuarios').insert(novoUsuario)
  }

  let { id } = await db('usuarios')
    .select('id').limit(1).first()

  await db('usuarios').where({ id: id })
    .update({
      nome: 'Zeca',
      email: 'email@eail.com'
    })

  return await db('usuarios').where({ id: id })
}

exercicio()
  .then(usuario => console.log(usuario))
  .finally(() => db.destroy())