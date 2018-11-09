var sql = require('../../mysql/sql');

var query = require('../../mysql');

var uuid = require('node-uuid');

function addUser(req, res, next) {
    var params = req.body;
    var nickName = params.nickName;
    var uid = params.uid;

    if (!nickName) {
        res.json({ code: 2, msg: '用户为空' });
        return;
    } else if (!uid) {
        userIsHas();
    }

    //检查昵称是否存在
    function userIsHas() {
        query(sql.USER_ISHAS, [nickName], function(error, results) {
            if (error) {
                res.json({ code: 0, msg: '服务器错误' })
            } else {
                if (results.length > 0) {
                    res.json({ code: 3, msg: '昵称已使用' })
                } else {
                    add();
                }
            }
        })
    }

    //添加
    function add() {
        var uid = uuid.v1();
        query(sql.ADD_USER, [uid, nickName], function(error, results) {
            if (error) {
                res.json({ code: 0, msg: '服务器错误' })
            } else {
                res.json({ code: 1, msg: '添加成功', uid: uid })
            }
        })
    }
}

module.exports = {
    addUser: addUser

}