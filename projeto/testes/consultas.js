const db = require('../config/db')

// db('perfis')
// 	.then(res => res.map(p => p.nome))
// 	.then(nome => console.log(nome))
// 	.finally(() => db.destroy())

// db('perfis').select('nome', 'id')
// 	.then(res => console.log(res))
// 	.finally(() => db.destroy())

// db('perfis').select('nome', 'id')
// 	.from('perfis')
// 	.limit(4).offset(0)
// 	.then(res => console.log(res))
// 	.finally(() => db.destroy())

db('perfis')
	.where({ id: 2 })
	.first()
	.then(res => console.log(res))
	.finally(() => db.destroy())

console.log('fim')