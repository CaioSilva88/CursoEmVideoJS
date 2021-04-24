//var d = window.document.getElementById("msg")
        var corpo = window.document.body
        var p1 = window.document.getElementsByTagName('p')[0]//primeiro parágrafo
        window.document.write(window.navigator.appName)
        
        window.document.write(window.document.charset)
        
        window.document.write()
        window.document.write("\t Está escrito assim:\t"+p1.innerText)
        p1.style.color = 'blue'
        corpo.style.color='black'
        document.write(p1.innerText)
        //d.style.background='grey'

        var d = window.document.querySelector('div#msg')
        d.style.background='green'
