//任何具有map方法的数据结构，都可以当作函子的实现。
class Functor {
    constructor(val) {
        this.val = val;
    }
    map(f) {
        return new Functor(f(this.val));
    }
}
//一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。
(new Functor(2)).map(function(two) {
    return two + 2;
});
// Functor(4)
(new Functor('flamethrowers')).map(function(s) {
    return s.toUpperCase();
});
// Functor('FLAMETHROWERS')
(new Functor('bombs')).map(_.concat(' away')).map(_.prop('length'));
// Functor(10)
Functor.of = function(val) {
    return new Functor(val);
};
class Maybe extends Functor {
    map(f) {
        return this.val ? Maybe.of(f(this.val)) : Maybe.of(null);
    }
}