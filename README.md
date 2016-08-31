###nodejs 错误日志模块
用法：

```
    var logger = require( 'logger' )( require( 'path').resolve( process.cwd() , 'logs' , 'error.log' ) ) ;
    logger( new Error( 'something error' ) );
```