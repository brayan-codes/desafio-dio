let xp = 8700;
let heroi = 'Salem, a gata feiticeira';

if (xp <= 1000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Ferro.');
} else if (xp >= 1001 && xp <= 2000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Bronze.');
} else if (xp >= 2001 && xp <= 5000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Prata.');
} else if (xp >= 5001 && xp <= 7000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Ouro.');
} else if (xp >= 7001 && xp <= 8000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Platina.');
} else if (xp >= 8001 && xp <= 9000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Ascendente.');
} else if (xp >= 9001 && xp <= 10000) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Imortal.');
} else if (xp >= 10001) {
    console.log('O nosso herói ' + heroi + ' está em um nível de Radiante.');
}