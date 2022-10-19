
let cols = 13
rows = 8
let x = Math.trunc(cols/2) + 1
for (let i=1; i<rows;i++){
    for (let j=cols; j>0; j--){
        if (j >= x+i || j<=x-i){
            process.stdout.write(" ");
        }
        
    else{
        process.stdout.write('*')
    }

    }
    console.log("") 
}
    