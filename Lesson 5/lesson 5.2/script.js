import { checkBalance, checkBeer, checkVine, checkPepsi, addBeer, addVine, addPepsi, fullPrice, beerBuy, vineBuy, pepsiBuy, finalBalance } from './shop.js'


$(function () {
    function refresh() {
        $('#balance').html(checkBalance());
        $('#beer').html(checkBeer() + ' шт.');
        $('#vine').html(checkVine() + ' шт.');
        $('#pepsi').html(checkPepsi() + ' шт.');
    }
    refresh()
    $('#add').on('click', () => {
        $('#buyBox').html('')
        let counts = Number($('#count').val())
        if ($('#beerRadio').is(":checked")) {
            if (counts <= checkBeer() && counts > 0) {
                $('#cart').append(`Пиво:${counts} шт. <br>`);
                addBeer(counts)
                refresh()
            }
            else {
                $('.modal').show()
                $('#modalMes').html(`Вибачте, але на складі залишилось пива ${checkBeer()} штук`)
            }
        }
        else if ($('#vineRadio').is(":checked")) {
            if (counts <= checkVine() && counts > 0) {
                $('#cart').append(`Вино:${counts} шт. <br>`);
                addVine(counts)
                refresh()
            }
            else {
                $('.modal').show()
                $('#modalMes').html(`Вибачте, але на складі залишилось віна ${checkVine()} штук`)
            }
        }
        else if ($('#pepsiRadio').is(":checked")) {
            if (counts <= checkPepsi() && counts > 0) {
                $('#cart').append(`Пепсі:${counts} шт. <br>`);
                addPepsi(counts)
                refresh()
            }
            else {
                $('.modal').show()
                $('#modalMes').html(`Вибачте, але на складі залишилось пепсі ${checkPepsi()} штук`)
            }
        }

    })
    $('#modalBtn').on('click', () => {
        $('.modal').hide()
    })
    $('#buy').on('click', () => {
        $('#buyBox').html('')
        if (beerBuy() > 0) {
            $("#buyBox").append(`Пиво:${beerBuy()} шт. <br>`)
        }
        if (vineBuy() > 0) {
            $("#buyBox").append(`Вино:${vineBuy()} шт. <br>`)
        }
        if (pepsiBuy() > 0) {
            $("#buyBox").append(`Пепсі:${pepsiBuy()} шт. <br>`)
        }
        $('#buyBox').append(`Всього:${fullPrice()} гривень`)
        $('#balance').html(finalBalance() + 'грн.')
        $('#cart').html('')
    })
})