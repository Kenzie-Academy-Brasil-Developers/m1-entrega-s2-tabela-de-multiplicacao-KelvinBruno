function tabela(a){
    let ar = []
    let multiplicacao = 0;
for(i=0;i<=a;i++){
    const num = []
    for(j = 0; j<=a;j++){
    multiplicacao = i*j;
    num.push(multiplicacao)
        
    }
    ar.push(num)

}
console.table(ar)
}


