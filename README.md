###nodejs 错误日志模块
用法：

```
    var logger = require( 'logger' )( require( 'path').resolve( process.cwd() , 'logs' , 'error.log' ) ) ;	// 必需确保path路径存在，不存在的应当手动建立目录
    logger( new Error( 'something error' ) );
```