$(document).ready(function () {
    var coins=0, boosts;
    $('.clickArea').on('click', function () {
        earnCoin(function(){updateCoins()});
    });
    function earnCoin(callback) {
        coins = coins + getClickValue();
        makeEffect();
        callback();
    }
    function getClickValue() {
        return 1;
    }
    function updateCoins() {
        $('.coinsValue').html(coins);
    }
    function makeEffect(){
        $('img').rotate();
    }

    
});