$(document).ready(function () {
    var coins=0, boosts=[1,2,10];
    $('.clickArea').on('click', function () {
        earnCoin(function(){updateCoins()});
    });
    function earnCoin(callback) {
        coins = coins + getClickValue();
        makeEffect();
        callback();
    }
    function getClickValue() {
        return 1 + applyBoosts(1);
    }
    function updateCoins() {
        $('.coinsValue').html(coins);
    }
    function makeEffect(){
        $('img').rotate();
    }
    function applyBoosts(base) {
        var total = 0;
        for(var i = 0; i < boosts.length; i++) {
            total += boosts[i]*base;
        }
        return total;
    }
    
});