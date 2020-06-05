//  var init = function() {
//     var puzzleArea = document.getElementById('puzzlearea');
//     var divs = puzzleArea.getElementsByTagName("div");
//         // calculate x and y for this piece
//         var x = ((i % 4) * 100) ;
//         var y = (Math.floor(i / 4) * 100) ;


// init();
$(function () {
    "use strict";

    startUP();

    const initialTiles = getCurrentPosition();

    let emptyTopId = 300;
    let emptyLeftId = 300;

    // start with shuffle button
    $("#shufflebutton").click(shufflePuzzle);
    function shufflePuzzle() {
        for (let i = 0; i < 100; i++) {
            const puzzlePieces = $(".puzzlepiece");
            let pieces = [];
            let i = 0;
            for (let j = 0; j < puzzlePieces.length; j++) {
                if ((emptyTopId === Math.floor($(puzzlePieces[j]).position().top)
                    && (emptyLeftId === Math.floor($(puzzlePieces[j]).position().left + 100)
                        || emptyLeftId === Math.floor($(puzzlePieces[j]).position().left - 100))) ||
                    (emptyLeftId === Math.floor($(puzzlePieces[j]).position().left)
                        && (emptyTopId === Math.floor($(puzzlePieces[j]).position().top + 100)
                            || emptyTopId === Math.floor($(puzzlePieces[j]).position().top - 100)))) {
                    pieces[k] = $(puzzlePieces[j]);
                    i++;
                }
            }
            empty($(pieces[Math.floor(Math.random() * (pieces.length))]));
        }
    };

    //start when mouse hovers on of tiles
    $(".puzzlepiece").hover(function () {
        if (isMovable($(this))) {
            $(this).addClass("movablepiece");
        }
    }, function () {
        $(this).removeClass("movablepiece");
    });

    // trigger when mouse  on the block is clicked 
    $(".puzzlepiece").click(function () {
        if (isMovable($(this))) {
            empty($(this));
            validateResult();
        }
    });

    /**
     * Initialize (init)  with  basic style and background
     */
    function startUP() {
        const tiles = $("#puzzlearea div");
        for (let i = 0; i < tiles.length; i++) {
            // block is like single tile or sqaure
            const block = tiles[i];
            const x = ((i % 4) * 100);
            const y = (Math.floor(i / 4) * 100);
            block.className = "puzzlepiece";
            block.style.left = x + "px";
            block.style.top = y + "px";
            block.style.backgroundImage = "url('./files/background.jpg')";
            block.style.backgroundPosition = -x + "px " + (-y) + "px";
            block.x = x;
            block.y = y;
        }
    }

    /**
     * Get current tiles containing position information.
     */
    function getCurrentPosition() {
        const tiles = [];
        const puzzlepieces = $(".puzzlepiece");
        for (let i = 0; i < puzzlepieces.length; i++) {
            tiles[i] = {
                x: $(puzzlepieces[i]).position().left,
                y: $(puzzlepieces[i]).position().top
            };
        }
        return tiles;
    }


    function isMovable(block) {
        const currentTilePosition = block.position();
        return (emptyTopId === currentTilePosition.top
            && (emptyLeftId === currentTilePosition.left + 100 || emptyLeftId === currentTilePosition.left - 100))
            || (emptyLeftId === currentTilePosition.left
                && (emptyTopId === currentTilePosition.top + 100 || emptyTopId === currentTilePosition.top - 100));
    }

    //make the block empty
    function empty(block) {
        const pos = block.position();
        block.css("top", emptyTopId + "px");
        block.css("left", emptyLeftId + "px");
        emptyTopId = pos.top;
        emptyLeftId = pos.left;
    }



});

