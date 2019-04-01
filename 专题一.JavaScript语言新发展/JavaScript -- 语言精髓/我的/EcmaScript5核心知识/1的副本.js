function yideng() {
    console.log(1);
};
(function(yideng) {
    yideng();
    yideng = function() {
        console.log(2);
    }

    function yideng() {
        console.log(3);
    }
    yideng();
    var yideng;
    yideng && yideng();
    yideng();
})(yideng)