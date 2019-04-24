const router = require('koa-router')()
const fetch = require('node-fetch');
console.log('-------------------------------------------------------------');
router.get('/', async (ctx, next) => {
  var res = await fetch('http://localhost:8080/yii2.0/web/index.php?r=hello/index').then(res => res.text());
  await ctx.render('index', {
    title: JSON.parse(res)
  });
})
router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: '😄'
  }
})

module.exports = router