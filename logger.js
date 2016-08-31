const fs = require( 'fs' ) ;
const path = require( 'path' ) ;
const stream = require( 'stream' ) ;
/* 获取当前时间的格式化 */
function getFormateDate(){
    var date = new Date() ,
        year = date.getFullYear() ,
        month = date.getMonth() + 1 ,
        mdate = date.getDate() ,
        h = date.getHours() ,
        m = date.getMinutes() ,
        s = date.getSeconds() ,
        ss = date.getMilliseconds() ;
    return year + '-' + month + '-' + mdate + ' ' + h + ':' + m + ':' + s + ' ' + ss ;
}
module.exports = function( filePath ){
    filePath = path.normalize( filePath ) ;
    const newStdout = new stream.PassThrough() ;
    newStdout.pipe( fs.createWriteStream( filePath , { 'flags' : 'a' } ) ) ;
    return function( str ){
        var time = getFormateDate() ;
        try{
            newStdout.write( time + ' ' + str + '\n' ) ;
        }catch(e){
            console.warn( '日志写入错误' ) ;
        }
    }
}