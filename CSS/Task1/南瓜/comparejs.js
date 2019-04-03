let comparestrnum=(strnum)=>{
    let numarr=[]
    let str=''
    for(let i=0;i<strnum.length;i++){
        if(!isNaN(strnum[i])||(strnum[i]==='.'&&!isNaN(str[str.length-1]))){
            str+=strnum[i]
        }else{
            if(str[str.length-1]!==','){
                str+=','
            }
        }
    }
    numarr=str.split(',')
    let newnumarr=[]
    for(let i of numarr){
        if(i[i.length-1]==='.'){
            i=i.substring(0,i.length-1)
        }
        if(i.indexOf('.')>0){
            i.split('.').forEach(k=>{
                newnumarr.push(k)
            })
        }
        newnumarr.push(i)
        
    }
    newnumarr.sort((a,b)=>{return a-b})
    return newnumarr[0]
}