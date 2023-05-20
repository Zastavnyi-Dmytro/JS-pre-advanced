$(function(){
    let rightPuzzle = ["puz1","puz2","puz3","puz4","puz5","puz6","puz7","puz8","puz9","puz10","puz11","puz12","puz13","puz14","puz15","puz16"];
    let startFun = false;
    let timeID;
    let startBtn = document.getElementById('startBtn')
    let checkBtn = document.getElementById('checkBtn')
    
    


    function shuffle() {
        let puzzleParts = ["puz1","puz2","puz3","puz4","puz5","puz6","puz7","puz8","puz9","puz10","puz11","puz12","puz13","puz14","puz15","puz16"];
            puzzleParts = puzzleParts.sort(() => Math.random() - 0.5);
            $('.img-parts').each(function (index, element) {
                $(this).addClass(puzzleParts[index])
            });
    }  
    shuffle();

    function dragAndDrop() {
        $('.img-parts').draggable({
            containment: 'gameArea',
            revert: 'invalid',
            start: function () {
                $(this).css("z-index","4")
                if ($(this).hasClass('dropped-puzzle')) {
                    $(this).removeClass('dropped-puzzle');
                    $(this).parent().removeClass('puzzle-now');
                }
            }
            });
            
         $('.dropItem').droppable({
             accept: function () {
                  return !$(this).hasClass('puzzle-now')
            },
            drop: function (event, ui) {
                startGame()
                let draggableItem = ui.draggable;
                let droppedOn = $(this);
                droppedOn.addClass('puzzle-now');
                $(draggableItem).addClass('dropped-puzzle');
                $(draggableItem).css({
                    
                    top: 0,
                    left: 0,
                    position: 'relative'
                }).appendTo(droppedOn);
             },
        });
    };
    dragAndDrop()

    $('#startBtn').on('click', function(){
        startGame()
    })

    function startGame(){
        if(startFun === false){
            countdown();
            checkBtn.disabled = false
            startBtn.disabled = true
        }
    }   

    function countdown() {
        startFun = true;
        let seconds = 60;
        function tick() {
            seconds--;
            $(".time").html("00:" + (seconds >= 10 ? "" : "0") + String(seconds));
            if(seconds > 0){
                timeID = setTimeout(tick,1000)
            }else if(seconds < 0){
                clearTimeout(timeID);
                console.log("Time's up")
            } 
            if(seconds == 0){
                checkGame()
                $("#checkBtn").prop("disabled","true")
            }
        }
        tick();
    }

    function checkGame() {
        if ($('#gameArea .dropped-puzzle').length != 16) {
            loose()
            return false;
        } 
        let result = 0;
        for(let i = 0;i<16;i++){
            $(`#gameArea .dropped-puzzle:eq(${i})`).hasClass(rightPuzzle[i])?result++:result--
        };
        if(result==16){
            win();
            return true;
        }else{
            loose();
            return false
        }
    };

    $('#checkBtn').on('click', function(){
        $('.modal-window').css({
            display: 'block',
            zIndex: '5'
        })
        $('.modal-check').css('display', 'block')
    })

    $('#modalClose').on('click', function(){
        $('.modal-window').css({
            display: 'none'
        })
        $('.modal-check').css('display', 'none')
    })

    $('#modalCheck').on('click', function(){
        $('.modal-check').css('display', 'none')
        clearTimeout(timeID)
        checkGame()
    })

    function win(){
        $(".modal-window").css({
            "display":"block",
            "z-index":"4"
        });
        $(".modal-win").css("display","block");
    }

    function loose(){
        $(".modal-window").css({"display":"block","z-index":"4"});
        $(".modal-loose").css("display","block");
        $("#checkBtn").prop("disabled","true")
    }

    $('#winClose').on('click', function(){
        $('.modal-window').css({
            display: 'none'
        })
        $('.modal-win').css('display', 'none')
        $("#checkBtn").prop("disabled","true")
    })

    $('#looseClose').on('click', function(){
        $('.modal-window').css({
            display: 'none'
        })
        $('.modal-close').css('display', 'none')
    })

    $("#newBtn").on("click", function () {
        location.reload()
    })
})