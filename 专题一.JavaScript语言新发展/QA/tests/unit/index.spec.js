describe('函数基本api的测试', function() {
    it('+1函数是否可用', function() {
        /* 
        toBe(2)希望值是2
        */
        expect(window.add(1)).toBe(2);
    })
})