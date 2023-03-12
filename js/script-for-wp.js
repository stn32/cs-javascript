function replaceNum() {
  const priceBox = document.querySelector('#product-<?php the_ID(); ?> .dolyami strong');
  const priceMain = document.querySelector('#product-<?php the_ID(); ?> .price ins .amount > bdi').innerHTML;
  const priceNum = priceMain.replace(/[^0-9]/g,"");
  const divider = 4;
  const resNum = priceNum / divider;
  const newNum = `<span><b>${resNum}</b></span>`;

  priceBox.innerHTML = newNum;
}
replaceNum();
