
# Validador de Bandeiras de Cartão de Crédito 🧾💳

Este projeto é um simples validador de bandeiras de cartão de crédito desenvolvido em **JavaScript**, com o auxílio do **GitHub Copilot**. O objetivo principal é identificar automaticamente a bandeira de um cartão com base nos seus dígitos iniciais, conforme os padrões definidos pelas operadoras.

## 🚀 Tecnologias utilizadas

- JavaScript (ES6)
- GitHub Copilot (como assistente de codificação)
- Regex (Expressões Regulares)

## 💡 Como funciona

A função `identificarBandeira(numero)` recebe como entrada uma string com o número do cartão (com ou sem formatação) e retorna a bandeira correspondente, como **Visa**, **MasterCard**, **Elo**, entre outras.

Exemplo de uso:

```javascript
console.log(identificarBandeira('4111111111111111')); // Visa
console.log(identificarBandeira('5500000000000004')); // MasterCard
console.log(identificarBandeira('4011780000000000')); // Elo
```

## 📌 Lógica de identificação

A função remove quaisquer caracteres não numéricos do número de entrada e usa expressões regulares para verificar os padrões das seguintes bandeiras:

| Bandeira         | Início do número                          |
|------------------|-------------------------------------------|
| **Visa**         | Começa com 4                              |
| **MasterCard**   | 51-55 ou 2221-2720                        |
| **Elo**          | 4011, 4312, 4389 (entre outros)           |
| **American Express** | 34 ou 37                          |
| **Discover**     | 6011, 65 ou entre 644-649                |
| **Hipercard**    | 6062                                     |

> A imagem de referência utilizada pode ser encontrada na pasta do projeto (`arquivo.png`).

## 🧠 Como foi usar o GitHub Copilot?

A experiência com o **GitHub Copilot** foi bastante fluida e produtiva. Ele ajudou a acelerar o processo de desenvolvimento sugerindo expressões regulares complexas com base nas minhas instruções iniciais. Além disso, ele propôs melhorias no código conforme eu digitava, o que foi excelente para aprender boas práticas enquanto codificava.

Durante o desenvolvimento, bastava começar a escrever a lógica de uma bandeira e o Copilot já completava com sugestões bem alinhadas com o que eu precisava — poupando tempo e reduzindo erros.

## 📂 Estrutura do projeto

```
.
├── index.js          # Função principal com os testes
├── arquivo.png       # Tabela de referência com padrões das bandeiras
└── README.md         # Documentação do projeto
```

## ✨ Próximos passos

- [ ] Adicionar mais padrões de bandeiras como Aura, JCB, Diners Club, etc.
- [ ] Criar uma interface web simples para validar os números visualmente
- [ ] Implementar validação Luhn para verificar se o número do cartão é válido

---

Criado com ❤️ e curiosidade em JavaScript.
