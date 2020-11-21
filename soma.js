<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu Primeiro Programa</title>
    <style>
        body{
            background-color: rgb(123, 123, 185);
            color: white;
            font: 20pt Arial;
        }
        h1{
            color:  rgb(192, 192, 67);
        }
    </style>
</head>
<body>
    <script>
        
        var numero1 = Number(window.prompt('Digite o primeiro número a ser somado, por favor:'));
        var numero2 = Number(window.prompt('Digite o primeiro número a ser somado, por favor:'));
        var resultado = numero1 + numero2;
        alert(`O resultado da soma é: ${resultado}`);
    </script>
    
    
</body>
</html>
