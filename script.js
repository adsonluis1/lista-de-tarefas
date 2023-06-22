// DOM
const iano = document.getElementById('iano')
const btn_enviar = document.getElementById('btn_enviar')
const tela = document.getElementById('tela')
const p_data = document.getElementById('data')
const btn_apagar_tudo= document.getElementById('btn_apagar_tudo')
const div_btn_apagar_tudo = document.getElementById('div_btn_apagar_tudo')

// resolver o bug do childNodes com text
tela.childNodes.forEach((e)=>{
    tela.removeChild(e)
})

// sitema de verificação se a anotação está em branco
btn_enviar.addEventListener('click' , ()=>{
    if(iano.value == ''){
        alert('sem anotação')
        
    }else{
        // crindo os elemnetos e colocando os atributos
        const id = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const idp= Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const idbtn= Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const labelid = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        const check= document.createElement('input')
        const p = document.createElement('p')
        p.setAttribute('id' , idp)
        tela.appendChild(p)
        check.setAttribute('type' , 'checkbox')
        check.setAttribute('id' , id)
        p.appendChild(check)  
        const label = document.createElement('label')
        label.setAttribute('for' , id)
        label.setAttribute('id' , labelid)
        p.appendChild(label)
        label.innerHTML= `${iano.value}`
        const btn = document.createElement('button')
        btn.setAttribute('id' , idbtn)
        btn.setAttribute('class' , 'btn')
        btn.innerHTML= '🗑️'
        p.appendChild(btn)
        const hr = document.createElement('hr')
        p.appendChild(hr)
        
        // botão da lixeirinha pra apagar as heckbox separadamente
        btn.addEventListener('click', (evt)=>{
            evt.target.parentNode.remove()    
            if(tela.childNodes.length <= 0){
                div_btn_apagar_tudo.style.display='none'
            }
        })   

        //riscar a label da checkbox  
        check.addEventListener('click' , (evt)=>{
            if(evt.target.checked){
                evt.target.parentNode.childNodes[1].setAttribute('class' , 'risco')
            }else if(evt.target.checked == false){
                evt.target.parentNode.childNodes[1].removeAttribute('class' , 'risco')
            }
            
        })

        // botão de apgar tudo
        btn_apagar_tudo.addEventListener('click' , (e)=>{
            tela.childNodes.forEach((evt)=>{
                tela.removeChild(evt)
                tela.innerHTML=''
            })
            div_btn_apagar_tudo.style.display= 'none'
        })
        div_btn_apagar_tudo.style.display= 'flex'
    }
    
    iano.value = ''
})


// data na pag
const date = new Date
let dia = date.getDate()
dia= dia<10?'0'+dia: dia
let mes= date.getMonth() +1 
mes = mes<10? '0'+ mes: mes
let ano= date.getFullYear()
p_data.innerHTML= `${dia}/${mes}/${ano}`



