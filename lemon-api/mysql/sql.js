module.exports = {
    //2.添加用户
    ADD_USER: 'insert into userlist (uid,nick_name) values(?,?)',

    //1.查询此昵称是否存在
    USER_ISHAS: 'select * from userlist where nick_name=?',

    //3.添加分类
    ADD_CLASSIFY: 'insert into classify (cid,c_name,c_icon,c_type,uid) values(?,?,?,?,?)',

    //查询此分类是否存在
    CLASSIFY_ISHAS: 'select * from classify where (uid=? or uid="*") and c_name=?',
}