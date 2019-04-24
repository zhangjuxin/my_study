const superagent = require('supertest');
const app = require('./app');

function request() {
    return superagent(app.listen());
}
describe("node 的接口测试", function() {
    it('test测试', function(done) {
        request()
            .get('/test')
            .expect(200)
            .expect("Content-Type", /json/)
            .end(function(err, res) {
                if (err) {
                    done(err);
                }
                if (res.body.data == 'hello') {
                    done();
                } else {
                    done(new Error('数据异常'));
                }
            })
    })
})